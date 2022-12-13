<page>
    <actionBar title="nativescript-freshchat" />
    <gridLayout>
        <button class="info" text="{message}" horizontalAlignment="center" verticalAlignment="middle" textWrap="true"/>
    </gridLayout>
</page>

<script lang="typescript">
    import { DemoSharedFreshChatSDK } from '@demo/shared';
    import { } from '@nstudio/nativescript-freshchat';

    let message: string = "Test nativescript-freshchat"
</script>

<style>
    .info {
        font-size: 20;
    }
</style>
