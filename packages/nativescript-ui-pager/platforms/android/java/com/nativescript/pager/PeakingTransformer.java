package com.nativescript.pager;

import androidx.recyclerview.widget.RecyclerView;
import androidx.viewpager2.widget.ViewPager2;

import android.view.View;
import android.view.ViewParent;
import android.util.Log;

public final class PeakingTransformer implements ViewPager2.PageTransformer {
    public float pageOffset = 0.0f;
    public float pageMargin = 0.0f;
    /**
     * Creates a {@link PeakingTransformer}.
     *
     */
    public PeakingTransformer() {
    }
    @Override
    public void transformPage(View page, float position) {
        ViewPager2 viewPager = requireViewPager(page);
        float offset = position * -(2 * pageOffset - pageMargin);
        boolean isRtl = viewPager.getLayoutDirection() == 1;
        if (viewPager.getOrientation() == ViewPager2.ORIENTATION_HORIZONTAL) {
            page.setTranslationX(isRtl ? -offset : offset);
        } else {
            page.setTranslationY(offset);
        }
    }
    private ViewPager2 requireViewPager(View page) {
        ViewParent parent = page.getParent();
        ViewParent parentParent = parent.getParent();
        if (parent instanceof RecyclerView && parentParent instanceof ViewPager2) {
            return (ViewPager2) parentParent;
        }
        throw new IllegalStateException(
                "Expected the page view to be managed by a ViewPager2 instance.");
    }
}