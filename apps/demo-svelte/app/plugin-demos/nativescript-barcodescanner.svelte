<page>
    <actionBar title="nativescript-barcodescanner" />
    <gridLayout>
        <button class="info" text="{message}" horizontalAlignment="center" verticalAlignment="middle" textWrap="true"/>
    </gridLayout>
</page>

<script lang="typescript">
    import { DemoSharedNativescriptBarcodescanner } from '@demo/shared';
    import { } from '@nstudio/nativescript-barcodescanner';

    let message: string = "Test nativescript-barcodescanner"
</script>

<style>
    .info {
        font-size: 20;
    }
</style>
