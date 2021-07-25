<page>
    <actionBar title="nativescript-fancyalert" />
    <gridLayout>
        <button class="info" text="{message}" horizontalAlignment="center" verticalAlignment="middle" textWrap="true"/>
    </gridLayout>
</page>

<script lang="typescript">
    import { DemoSharedNativescriptFancyalert } from '@demo/shared';
    import { } from '@nstudio/nativescript-fancyalert';

    let message: string = "Test nativescript-fancyalert"
</script>

<style>
    .info {
        font-size: 20;
    }
</style>
