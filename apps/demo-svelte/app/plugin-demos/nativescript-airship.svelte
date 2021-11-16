<page>
    <actionBar title="nativescript-airship" />
    <gridLayout>
        <button class="info" text="{message}" horizontalAlignment="center" verticalAlignment="middle" textWrap="true"/>
    </gridLayout>
</page>

<script lang="typescript">
    import { DemoSharedNativescriptAirship } from '@demo/shared';
    import { } from '@nstudio/nativescript-airship';

    let message: string = "Test nativescript-airship"
</script>

<style>
    .info {
        font-size: 20;
    }
</style>
