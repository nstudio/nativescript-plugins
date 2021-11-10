<page>
    <actionBar title="nativescript-airship-fcm" />
    <gridLayout>
        <button class="info" text="{message}" horizontalAlignment="center" verticalAlignment="middle" textWrap="true"/>
    </gridLayout>
</page>

<script lang="typescript">
    import { DemoSharedNativescriptAirshipFcm } from '@demo/shared';
    import { } from '@nstudio/nativescript-airship-fcm';

    let message: string = "Test nativescript-airship-fcm"
</script>

<style>
    .info {
        font-size: 20;
    }
</style>
