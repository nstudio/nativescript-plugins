<page>
    <actionBar title="nativescript-qr" />
    <gridLayout>
        <button class="info" text="{message}" horizontalAlignment="center" verticalAlignment="middle" textWrap="true"/>
    </gridLayout>
</page>

<script lang="typescript">
    import { DemoSharedNativescriptQr } from '@demo/shared';
    import { } from '@nstudio/nativescript-qr';

    let message: string = "Test nativescript-qr"
</script>

<style>
    .info {
        font-size: 20;
    }
</style>
