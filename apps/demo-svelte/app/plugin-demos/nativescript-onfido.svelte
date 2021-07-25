<page>
    <actionBar title="nativescript-onfido" />
    <gridLayout>
        <button class="info" text="{message}" horizontalAlignment="center" verticalAlignment="middle" textWrap="true"/>
    </gridLayout>
</page>

<script lang="typescript">
    import { DemoSharedNativescriptOnfido } from '@demo/shared';
    import { } from '@nstudio/nativescript-onfido';

    let message: string = "Test nativescript-onfido"
</script>

<style>
    .info {
        font-size: 20;
    }
</style>
