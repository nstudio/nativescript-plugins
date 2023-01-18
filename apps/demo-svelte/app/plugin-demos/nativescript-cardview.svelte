<page>
    <actionBar title="nativescript-cardview" />
    <gridLayout>
        <button class="info" text="{message}" horizontalAlignment="center" verticalAlignment="middle" textWrap="true"/>
    </gridLayout>
</page>

<script lang="typescript">
    import { DemoSharedNativescriptCardview } from '@demo/shared';
    import { } from '@nstudio/nativescript-cardview';

    let message: string = "Test nativescript-cardview"
</script>

<style>
    .info {
        font-size: 20;
    }
</style>
