<page>
    <actionBar title="nativescript-plaid" />
    <gridLayout>
        <button class="info" text="{message}" horizontalAlignment="center" verticalAlignment="middle" textWrap="true"/>
    </gridLayout>
</page>

<script lang="typescript">
    import { DemoSharedNativescriptPlaid } from '@demo/shared';
    import { } from '@nstudio/nativescript-plaid';

    let message: string = "Test nativescript-plaid"
</script>

<style>
    .info {
        font-size: 20;
    }
</style>
