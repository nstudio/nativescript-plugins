<template>
  <Page>
    <ActionBar>
      <Label text="nativescript-exoplayer"/>
    </ActionBar>

    <GridLayout>
      <Button class="info" :text="message"/>
    </GridLayout>
  </Page>
</template>

<script lang="ts">
  import Vue from "nativescript-vue";
  import { DemoSharedNativescriptExoplayer } from '@demo/shared';
  import { } from '@nstudio/nativescript-exoplayer';

  export default Vue.extend({
    computed: {
      message() {
        return "Test nativescript-exoplayer";
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
