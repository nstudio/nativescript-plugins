<page>
    <actionBar title="nativescript-embrace" />
    <gridLayout>
        <button class="info" text="{message}" horizontalAlignment="center" verticalAlignment="middle" textWrap="true"/>
    </gridLayout>
</page>

<script lang="typescript">
    import { DemoSharedNativescriptEmbrace } from '@demo/shared';
    import { } from '@nstudio/nativescript-embrace';

    let message: string = "Test nativescript-embrace"
</script>

<style>
    .info {
        font-size: 20;
    }
</style>
