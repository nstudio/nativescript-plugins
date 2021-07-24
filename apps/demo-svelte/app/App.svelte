<page>
    <actionBar title="Demo Svelte App" />
    <gridLayout>
        <label class="info" text="{message}" horizontalAlignment="center" verticalAlignment="middle" textWrap="true"/>
    </gridLayout>
</page>

<script lang="typescript">
    let message: string = "Demo Svelte App"
</script>

<style>
    .info {
        font-size: 20;
    }
</style>
