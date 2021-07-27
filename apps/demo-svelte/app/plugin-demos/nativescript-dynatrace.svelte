<page>
    <actionBar title="nativescript-dynatrace" />
    <gridLayout>
        <button class="info" text="{message}" horizontalAlignment="center" verticalAlignment="middle" textWrap="true"/>
    </gridLayout>
</page>

<script lang="typescript">
    import { DemoSharedNativescriptDynatrace } from '@demo/shared';
    import { } from '@nstudio/nativescript-dynatrace';

    let message: string = "Test nativescript-dynatrace"
</script>

<style>
    .info {
        font-size: 20;
    }
</style>
