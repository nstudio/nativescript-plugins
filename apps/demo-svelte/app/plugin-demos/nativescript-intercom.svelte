<page>
    <actionBar title="nativescript-intercom" />
    <gridLayout>
        <button class="info" text="{message}" horizontalAlignment="center" verticalAlignment="middle" textWrap="true"/>
    </gridLayout>
</page>

<script lang="typescript">
    import { DemoSharedNativescriptIntercom } from '@demo/shared';
    import { } from '@nstudio/nativescript-intercom';

    let message: string = "Test nativescript-intercom"
</script>

<style>
    .info {
        font-size: 20;
    }
</style>
