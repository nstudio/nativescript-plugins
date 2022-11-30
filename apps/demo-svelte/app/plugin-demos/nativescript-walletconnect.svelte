<page>
    <actionBar title="nativescript-walletconnect" />
    <gridLayout>
        <button class="info" text="{message}" horizontalAlignment="center" verticalAlignment="middle" textWrap="true"/>
    </gridLayout>
</page>

<script lang="typescript">
    import { DemoSharedNativescriptWalletconnect } from '@demo/shared';
    import { } from '@nstudio/nativescript-walletconnect';

    let message: string = "Test nativescript-walletconnect"
</script>

<style>
    .info {
        font-size: 20;
    }
</style>
