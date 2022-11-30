<page>
    <actionBar title="nativescript-persona" />
    <gridLayout>
        <button class="info" text="{message}" horizontalAlignment="center" verticalAlignment="middle" textWrap="true"/>
    </gridLayout>
</page>

<script lang="typescript">
    import { DemoSharedNativescriptPersona } from '@demo/shared';
    import { } from '@nstudio/nativescript-persona';

    let message: string = "Test nativescript-persona"
</script>

<style>
    .info {
        font-size: 20;
    }
</style>
