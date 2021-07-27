<template>
  <Page>
    <ActionBar>
      <Label text="nativescript-camera-plus"/>
    </ActionBar>

    <GridLayout>
      <Button class="info" :text="message"/>
    </GridLayout>
  </Page>
</template>

<script lang="ts">
  import Vue from "nativescript-vue";
  import { DemoSharedNativescriptCameraPlus } from '@demo/shared';
  import { } from '@nstudio/nativescript-camera-plus';

  export default Vue.extend({
    computed: {
      message() {
        return "Test nativescript-camera-plus";
      }
    }
  });
</script>

<style scoped lang="scss">

  .info {
    font-size: 20;
    horizontal-align: center;
    vertical-align: center;
  }
</style>
