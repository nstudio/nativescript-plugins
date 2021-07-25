<page>
    <actionBar title="nativescript-camera-plus" />
    <gridLayout>
        <button class="info" text="{message}" horizontalAlignment="center" verticalAlignment="middle" textWrap="true"/>
    </gridLayout>
</page>

<script lang="typescript">
    import { DemoSharedNativescriptCameraPlus } from '@demo/shared';
    import { } from '@nstudio/nativescript-camera-plus';

    let message: string = "Test nativescript-camera-plus"
</script>

<style>
    .info {
        font-size: 20;
    }
</style>
