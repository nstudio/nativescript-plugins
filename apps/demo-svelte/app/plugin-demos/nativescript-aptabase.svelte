<page>
    <actionBar title="nativescript-aptabase" />
    <gridLayout>
        <button class="info" text="{message}" horizontalAlignment="center" verticalAlignment="middle" textWrap="true"/>
    </gridLayout>
</page>

<script lang="typescript">
    import { DemoSharedNativescriptAptabase } from '@demo/shared';
    import { } from '@nstudio/nativescript-aptabase';

    let message: string = "Test nativescript-aptabase"
</script>

<style>
    .info {
        font-size: 20;
    }
</style>
