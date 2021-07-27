<page>
    <actionBar title="nativescript-input-mask" />
    <gridLayout>
        <button class="info" text="{message}" horizontalAlignment="center" verticalAlignment="middle" textWrap="true"/>
    </gridLayout>
</page>

<script lang="typescript">
    import { DemoSharedNativescriptInputMask } from '@demo/shared';
    import { } from '@nstudio/nativescript-input-mask';

    let message: string = "Test nativescript-input-mask"
</script>

<style>
    .info {
        font-size: 20;
    }
</style>
