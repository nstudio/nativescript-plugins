<page>
    <actionBar title="nativescript-appcues" />
    <gridLayout>
        <button class="info" text="{message}" horizontalAlignment="center" verticalAlignment="middle" textWrap="true"/>
    </gridLayout>
</page>

<script lang="typescript">
    import { DemoSharedNativescriptAppcues } from '@demo/shared';
    import { } from '@nstudio/nativescript-appcues';

    let message: string = "Test nativescript-appcues"
</script>

<style>
    .info {
        font-size: 20;
    }
</style>
