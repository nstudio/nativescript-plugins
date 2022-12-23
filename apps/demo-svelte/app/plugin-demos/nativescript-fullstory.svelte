<page>
    <actionBar title="nativescript-fullstory" />
    <gridLayout>
        <button class="info" text="{message}" horizontalAlignment="center" verticalAlignment="middle" textWrap="true"/>
    </gridLayout>
</page>

<script lang="typescript">
    import { DemoSharedNativescriptFullstory } from '@demo/shared';
    import { } from '@nstudio/nativescript-fullstory';

    let message: string = "Test nativescript-fullstory"
</script>

<style>
    .info {
        font-size: 20;
    }
</style>
