<page>
    <actionBar title="nativescript-loading-indicator" />
    <gridLayout>
        <button class="info" text="{message}" horizontalAlignment="center" verticalAlignment="middle" textWrap="true"/>
    </gridLayout>
</page>

<script lang="typescript">
    import { DemoSharedNativescriptLoadingIndicator } from '@demo/shared';
    import { } from '@nstudio/nativescript-loading-indicator';

    let message: string = "Test nativescript-loading-indicator"
</script>

<style>
    .info {
        font-size: 20;
    }
</style>
