package io.github.triniwiz.splitsheetdemo

import android.animation.AnimatorSet
import android.animation.ObjectAnimator
import android.content.Context
import android.graphics.Color
import android.graphics.drawable.GradientDrawable
import android.util.AttributeSet
import android.util.Log
import android.util.SparseArray
import android.util.TypedValue
import android.view.*
import android.view.ViewGroup.LayoutParams
import android.view.animation.AccelerateDecelerateInterpolator
import android.widget.FrameLayout
import android.widget.LinearLayout
import androidx.constraintlayout.widget.ConstraintLayout
import androidx.core.animation.doOnEnd
import androidx.core.widget.NestedScrollView
import kotlin.math.abs
import kotlin.math.roundToInt
import kotlin.math.roundToLong

class SplitSheet : NestedScrollView {

    constructor(context: Context) : super(context)

    constructor(context: Context, attrs: AttributeSet) : super(context, attrs)

    constructor(context: Context, attrs: AttributeSet, defStyle: Int) : super(
        context,
        attrs,
        defStyle
    )

    var mainView: View? = null
    var sheetView: View? = null

    /// If true, `mainViewController` will shift up as the sheet is shown.
    var displaceContent = true

    /// Show a grabber handle.
    var showHandle = true

    /// The minimum sheet height.
    var minimumSheetHeight = 400F

    /// Enforce a sheet height which always shows when in "not showing" state
    var closedSheetHeight = 90F

    /// When the sheet is shown and dragged within this limit, the sheet will bounce back.
    var snappingDistance = 150F

    /// How long the show/hide animation takes.
    var animationDuration = 0.4F

    /// If swiping up to show the sheet is allowed or not.
    var swipeUpToShowAllowed = true


    /// The current state of the sheet. `true` if shown, `false` if hidden.
    /// Observable with Combine.
    var showing = false

    var isScrollEnabled = true
        set(value) {
            containerView.requestDisallowInterceptTouchEvent(!value)
            field = value
        }

    private val containerView = ConstraintLayout(context)

    private val mainContainerView = LinearLayout(context)

    private val sheetContainerView = LinearLayout(context)

    private var handleView: View? = null

    interface Events {
        fun event(name: String, value: Any?)
    }

    var eventListener: Events? = null

    val metrics = resources.displayMetrics

    private fun toPx(dip: Float): Float {
        return dip * metrics.density
    }

    private fun toPx(dip: Int): Int {
        return (dip * metrics.density).roundToInt()
    }

    private fun toDip(px: Float): Float {
        return px / metrics.density
    }

    private fun getScrollableLength(): Int {
        return containerView.height
    }

    private val detents =
        arrayOf(Pair(0F, Detents.Hidden), Pair(0F, Detents.Hidden), Pair(0F, Detents.Hidden))

    override fun onAttachedToWindow() {
        super.onAttachedToWindow()
        velocityTracker = VelocityTracker.obtain()
    }

    override fun onDetachedFromWindow() {
        super.onDetachedFromWindow()
        velocityTracker?.clear()
    }

    private enum class Detents {
        Hidden,
        Shown,
        Expanded
    }

    private val interpolator = AccelerateDecelerateInterpolator()

    private var startX = 0F

    private var startY = 0F

    private var lastDeltaX = 0

    private var lastDeltaY = 0

    private var lastScrollX = 0

    private var lastScrollY = 0

    private var viewConfiguration = ViewConfiguration.get(context)

    private var velocityTracker: VelocityTracker? = null

    private var minFlingVelocity = 0

    private var state = Detents.Hidden

    private fun setState(state: Detents) {
        this.state = state
    }

    init {
        minFlingVelocity = viewConfiguration.scaledMinimumFlingVelocity

        mainContainerView.orientation = LinearLayout.VERTICAL
        sheetContainerView.orientation = LinearLayout.VERTICAL

        containerView.id = View.generateViewId()
        mainContainerView.id = View.generateViewId()
        sheetContainerView.id = View.generateViewId()
    }

    fun setup(
        mainView: View,
        sheetView: View
    ) {
        this.mainView = mainView
        this.sheetView = sheetView
        setup()
    }

    override fun onMeasure(widthMeasureSpec: Int, heightMeasureSpec: Int) {
        super.onMeasure(widthMeasureSpec, heightMeasureSpec)

        val height = MeasureSpec.makeMeasureSpec(heightMeasureSpec, MeasureSpec.EXACTLY)

        val params = mainContainerView.layoutParams
        params.width =
            MeasureSpec.makeMeasureSpec(widthMeasureSpec, MeasureSpec.EXACTLY)
        params.height = (height - toPx(closedSheetHeight)).toInt()

        sheetContainerView.minimumHeight = toPx(minimumSheetHeight).roundToInt()
    }

    private fun setup() {
        updateShowing(false)

        mainContainerView.layoutParams = ConstraintLayout.LayoutParams(-1, 0)
            .apply {
                topToTop = ConstraintLayout.LayoutParams.PARENT_ID
                leftToLeft = ConstraintLayout.LayoutParams.PARENT_ID
                rightToRight = ConstraintLayout.LayoutParams.PARENT_ID
                bottomToTop = sheetContainerView.id
            }

        mainView?.let {
            mainContainerView.addView(mainView)
        }

        containerView.addView(mainContainerView)

        sheetContainerView.layoutParams = ConstraintLayout.LayoutParams(-1, 0)
            .apply {
                // topMargin = -toPx(closedSheetHeight).roundToInt()
                leftToLeft = ConstraintLayout.LayoutParams.PARENT_ID
                rightToRight = ConstraintLayout.LayoutParams.PARENT_ID
                topToBottom = mainContainerView.id
            }

        sheetView?.let {
            sheetContainerView.addView(it, -1, -2)
        }

        containerView.addView(sheetContainerView)

        addView(containerView, -1, -2)

        isVerticalScrollBarEnabled = false
        overScrollMode = OVER_SCROLL_ALWAYS
    }

    enum class Position(internal val value: Int) {
        Undefined(-1),
        Top(0),
        Bottom(1);

        companion object {
            internal fun fromInt(value: Int): Position? {
                return when (value) {
                    -1 -> Undefined
                    0 -> Top
                    1 -> Bottom
                    else -> null
                }
            }

            internal fun fromIntOrDefault(value: Int?, def: Position): Position {
                return fromInt(value ?: -2) ?: def
            }
        }
    }

    override fun addView(child: View, index: Int, params: ViewGroup.LayoutParams) {

        if (child == containerView) {
            super.addView(child, index, params)
            return
        }

        val lp = child.layoutParams as? LayoutParams ?: run {
            LayoutParams(child.layoutParams ?: generateDefaultLayoutParams())
        }

        val position = lp.position

        if (mainView == null && position == Position.Undefined) {
            mainView = child
            return
        }

        if (sheetView == null && position == Position.Undefined) {
            sheetView = child
            setup()
            return
        }

    }

    override fun generateLayoutParams(attrs: AttributeSet): FrameLayout.LayoutParams {
        return LayoutParams(context, attrs)
    }

    override fun generateDefaultLayoutParams(): FrameLayout.LayoutParams {
        return LayoutParams(
            ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT
        )
    }

    override fun generateLayoutParams(p: ViewGroup.LayoutParams?): ViewGroup.LayoutParams {
        return LayoutParams(p)
    }

    override fun checkLayoutParams(p: ViewGroup.LayoutParams?): Boolean {
        return p is LayoutParams
    }

    companion object {

        lateinit var context: Context

        private fun getResourceId(context: Context, name: String, type: String): Int {
            val id: Int
            val packageName = context.packageName
            id = try {
                val className = Class.forName("$packageName.R$$type")
                className.getDeclaredField(name.replace("res://", ""))[null] as Int
            } catch (e: ClassNotFoundException) {
                0
            } catch (e: NoSuchFieldException) {
                0
            } catch (e: IllegalAccessException) {
                0
            }
            return id
        }

        private fun getAppContext(): Context {
            return context
        }
    }

    class LayoutParams : FrameLayout.LayoutParams {
        internal var numericAttributes = SparseArray<Float>()
        internal var stringAttributes = SparseArray<String>()


        constructor(width: Int, height: Int) : super(width, height) {

            val id = getResourceId(getAppContext(), "SplitSheet_Layout_sheet_position", "styleable")
            numericAttributes.append(id, -1F)
        }

        constructor(source: ViewGroup.LayoutParams) : super(source) {
            if (source is LayoutParams) {
                numericAttributes = source.numericAttributes.clone()
                stringAttributes = source.stringAttributes.clone()
            } else {
                val id =
                    getResourceId(getAppContext(), "SplitSheet_Layout_sheet_position", "styleable")

                numericAttributes.append(id, -1F)
            }
        }

        constructor(context: Context, attrs: AttributeSet) : super(context, attrs) {
            try {
                val packageName = context.packageName
                val className = Class.forName("$packageName.R\$styleable")

                val attrId = className.getDeclaredField("SplitSheet_Layout").get(null) as IntArray
                val id =
                    getResourceId(getAppContext(), "SplitSheet_Layout_sheet_position", "styleable")

                val a = context.obtainStyledAttributes(attrs, attrId)

                numericAttributes.append(id, -1F)

                val attributeCount = a.indexCount
                for (i in 0 until attributeCount) {
                    val attribute = a.getIndex(i)
                    val typedValue = TypedValue()
                    a.getValue(attribute, typedValue)
                    when (typedValue.type) {
                        TypedValue.TYPE_DIMENSION -> {
                            numericAttributes.put(
                                attribute, a.getDimensionPixelSize(attribute, 0).toFloat()
                            )
                        }
                        TypedValue.TYPE_STRING -> {
                            stringAttributes.put(attribute, a.getString(attribute))
                        }
                        else -> {
                            numericAttributes.put(attribute, a.getFloat(attribute, 0f))
                        }
                    }
                }

                a.recycle()

            } catch (e: Exception) {
                e.printStackTrace()
            }
        }

        var position: Position
            get() {
                val id =
                    getResourceId(getAppContext(), "SplitSheet_Layout_sheet_position", "styleable")
                return Position.fromIntOrDefault(
                    numericAttributes.get(id)
                        .roundToInt(),
                    Position.Undefined
                )
            }
            set(value) {
                val id =
                    getResourceId(getAppContext(), "SplitSheet_Layout_sheet_position", "styleable")
                numericAttributes.put(
                    id,
                    value.value.toFloat()
                )
            }
    }

    private var mScrollable: Boolean = true

    private var handleTouch = false

    private var isDragging = false

    private var didDrag = false

    private var lastEvent = MotionEvent.ACTION_UP

    override fun dispatchTouchEvent(ev: MotionEvent): Boolean {
        return when (ev.action) {
            MotionEvent.ACTION_DOWN -> {

                velocityTracker?.clear()

                startX = ev.rawX
                startY = ev.rawY

                lastScrollX = this.scrollX
                lastScrollY = this.scrollY


                velocityTracker?.addMovement(ev)

                lastEvent = MotionEvent.ACTION_DOWN

                super.dispatchTouchEvent(ev)
            }
            MotionEvent.ACTION_MOVE -> {
                val currentX = ev.rawX
                val currentY = ev.rawY
                lastDeltaX = (startX - currentX).toInt()
                lastDeltaY = (startY - currentY).toInt()



                if (lastEvent == MotionEvent.ACTION_DOWN && (lastDeltaY > 5 || lastDeltaY < -5)) {
                    lastEvent = MotionEvent.ACTION_MOVE
                    isDragging = true
                    eventListener?.event("beginDrag", null)
                }

                if (isDragging) {
                    velocityTracker?.addMovement(ev)
                    velocityTracker?.computeCurrentVelocity(1000)
                }

                super.dispatchTouchEvent(ev)
            }
            MotionEvent.ACTION_UP, MotionEvent.ACTION_CANCEL -> {

                if (!isScrollEnabled) {
                    return true
                }

                val velocity = velocityTracker?.yVelocity ?: 0F

                handleTouch = handleScroll(velocity, scrollY) || super.dispatchTouchEvent(ev)

                if (lastEvent == MotionEvent.ACTION_MOVE) {
                    isDragging = false
                    didDrag = true
                }

                lastEvent = ev.action

                handleTouch
            }
            else -> super.dispatchTouchEvent(ev)
        }
    }

    private fun updateShowing(showing: Boolean) {
        this.showing = showing

        eventListener?.event("showing", showing)

        /// If `swipeUpToShowAllowed` is not enabled, prevent scrolling up when hidden.
        if (!swipeUpToShowAllowed) {
            mScrollable = showing
        }

        if (showHandle) {
            addHandle()
        } else {
            handleView?.let {
                removeView(it)
            }
        }
    }

    private fun addHandle() {
        if (handleView != null) {
            return
        }

        val handleContainer = LinearLayout(context)
        handleContainer.orientation = LinearLayout.VERTICAL

        val handleView = View(context)

        val background = GradientDrawable()
        background.setColor(Color.GRAY)
        background.cornerRadius = toPx(2.5F)

        handleView.background = background


        handleContainer.addView(handleView, LinearLayout.LayoutParams(toPx(36), toPx(5)).apply {
            gravity = Gravity.CENTER_HORIZONTAL
        })

        this.handleView = handleContainer

        sheetContainerView.addView(handleContainer, 0, LinearLayout.LayoutParams(-1, toPx(5)))
    }

    private var animation: AnimatorSet? = null

    private fun handleScroll(velocity: Float, scrollY: Int): Boolean {

        val didFling = abs(velocity) > abs(minFlingVelocity)

        val minimumSheetHeight = toPx(minimumSheetHeight)
        val closedSheetHeight = toPx(closedSheetHeight)

        /// The distance to the just-shown detent (shown, but not fully expanded).
        val distanceToShown = minimumSheetHeight - scrollY

        /// The content offset where the sheet is hidden.
        val hiddenDetent = closedSheetHeight

        /// The content offset where the sheet is *just* shown.
        val shownDetent = minimumSheetHeight

        /// The content offset where the scroll view hits the bottom.

        val expandedDetent = (getScrollableLength() - height).toFloat()

        detents[0] = Pair(hiddenDetent, Detents.Hidden)
        detents[1] = Pair(shownDetent, Detents.Shown)
        detents[2] = Pair(expandedDetent, Detents.Expanded)

        if (didFling && velocity < 0) {

            /// Only select smaller detents (prevents a flickering glitch.)
            val availableDetents = detents.filter {
                it.first < scrollY
            }

            var closestDetent = availableDetents.firstOrNull()

            closestDetent?.let { closest ->
                availableDetents.forEach {
                    if (abs(it.first - scrollY) < abs(closest.first - scrollY)) {
                        closestDetent = it
                    }
                }
            }

            handler.postDelayed({
                //"⬆️"
                //   smoothScrollTo(scrollX, shownDetent.roundToInt())

                //   doScroll(closestDetent?.second ?: state)

                val newState = state
                val state = when (state) {
                    Detents.Hidden -> hiddenDetent
                    Detents.Shown -> shownDetent
                    Detents.Expanded -> expandedDetent
                }

                smoothScrollTo(scrollX, closestDetent?.first?.roundToInt() ?: state.roundToInt())
                updateState(closestDetent?.second ?: newState)

                if (didDrag) {
                    handler.postDelayed({
                        didDrag = false
                        eventListener?.event("endDrag", null)
                    }, 40L)
                }

            }, 0L)
            return true
        } else if (didFling && velocity > 0) {

            //"⬇️️"

            val availableDetents = detents.filter { it.first < scrollY }

            var closestDetent = availableDetents.firstOrNull()

            closestDetent?.let { closest ->
                availableDetents.forEach {
                    if (abs(it.first - scrollY) > abs(closest.first - scrollY)) {
                        closestDetent = it
                    }
                }
            }


            handler.postDelayed({
                // doScroll(closestDetent?.second ?: state)


                //  doScroll(closestDetent?.second ?: state)

                val newState = state
                val state = when (state) {
                    Detents.Hidden -> hiddenDetent
                    Detents.Shown -> shownDetent
                    Detents.Expanded -> expandedDetent
                }

                smoothScrollTo(scrollX, closestDetent?.first?.roundToInt() ?: state.roundToInt())
                updateState(closestDetent?.second ?: newState)

                if (didDrag) {
                    handler.postDelayed({
                        didDrag = false
                        eventListener?.event("endDrag", null)
                    }, 40L)
                }

            }, 0L)
            return true
        } else {
            /// Ignore if sheet was released near the `expanded` detent.


            val snappingDistance = toPx(this.snappingDistance)

            if (distanceToShown > -snappingDistance) {
                handler.postDelayed({
                    if (distanceToShown < snappingDistance) {
                        smoothScrollTo(scrollX, shownDetent.roundToInt())
                        updateState(Detents.Shown)
                    } else {
                        smoothScrollTo(scrollX, closedSheetHeight.roundToInt())
                        updateState(Detents.Hidden)
                    }

                    if (didDrag) {
                        handler.postDelayed({
                            didDrag = false
                            eventListener?.event("endDrag", null)
                        }, 40L)
                    }

                }, 0L)
            } else {

                if (scrollY == 0) {
                    return false
                }

                val availableDetents = if (scrollY > 0) detents.filter { it.first < scrollY } else {
                    detents.filter { it.first > scrollY }
                }

                var closestDetent = availableDetents.firstOrNull()

                closestDetent?.let { closest ->
                    availableDetents.forEach {
                        if (abs(it.first - scrollY) > abs(closest.first - scrollY)) {
                            closestDetent = it
                        }
                    }
                }

                val newState = state
                val state = when (state) {
                    Detents.Hidden -> hiddenDetent
                    Detents.Shown -> shownDetent
                    Detents.Expanded -> expandedDetent
                }

                handler.postDelayed({
                    smoothScrollTo(scrollX, ((closestDetent?.first ?: state).roundToInt()))
                    updateState(closestDetent?.second ?: newState)

                    if (didDrag) {
                        handler.postDelayed({
                            didDrag = false
                            eventListener?.event("endDrag", null)
                        }, 40L)
                    }

                }, 0L)
            }

        }
        return true
    }

    private fun updateState(newState: Detents) {
        state = newState
        showing = newState == Detents.Shown

        if (didDrag) {
            eventListener?.event("showing", showing)
        }
    }

    fun show(shouldShow: Boolean) {
        if (shouldShow && state == Detents.Shown || !shouldShow && state == Detents.Hidden) {
            return
        }
        animation?.cancel()
        animation = null

        val interpolator = this.interpolator
        val minimumSheetHeight = toPx(minimumSheetHeight).roundToInt()
        val closedSheetHeight = toPx(closedSheetHeight).roundToInt()

        val toSize = if (shouldShow) {
            minimumSheetHeight
        } else {
            closedSheetHeight
        }

        val scrollAnimation = ObjectAnimator.ofInt(this, "scrollY", toSize)
            .apply {
                addUpdateListener {
                    val value = (it.animatedValue as Int)
                    mainContainerView.translationY = value.toFloat()
                    sheetContainerView.translationY = value.toFloat()
                }
            }

        val mainContainerViewHeight = mainContainerView.height
        val newHeight = height - toSize
        val heightAnimation = ObjectAnimator.ofInt(
            mainContainerViewHeight,
            newHeight
        ).apply {
            addUpdateListener {
                val value = (it.animatedValue as Int)
                val params = mainContainerView.layoutParams
                params.height = value
                mainContainerView.layoutParams = params
            }
        }

        animation = AnimatorSet()
            .apply {
                playTogether(scrollAnimation, heightAnimation)
                this.interpolator = interpolator
                duration = (animationDuration * 1000).roundToLong()
                doOnEnd {
                    showing = shouldShow
                    state = if (shouldShow) Detents.Shown else Detents.Hidden
                    eventListener?.event("showing", showing)

                }
            }


        animation?.start()

    }

    override fun onOverScrolled(scrollX: Int, scrollY: Int, clampedX: Boolean, clampedY: Boolean) {
        super.onOverScrolled(scrollX, scrollY, clampedX, clampedY)

        mainContainerView.translationY = scrollY.toFloat()
        sheetContainerView.translationY = scrollY.toFloat()

        val params = mainContainerView.layoutParams
        params.height = height - scrollY

        mainContainerView.layoutParams = params
    }

}