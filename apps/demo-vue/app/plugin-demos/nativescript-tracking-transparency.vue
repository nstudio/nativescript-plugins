<template>
  <Page>
    <ActionBar>
      <Label text="nativescript-tracking-transparency"/>
    </ActionBar>

    <GridLayout>
      <Button class="info" :text="message"/>
    </GridLayout>
  </Page>
</template>

<script lang="ts">
  import Vue from "nativescript-vue";
  import { DemoSharedNativescriptTrackingTransparency } from '@demo/shared';
  import { } from '@nstudio/nativescript-tracking-transparency';

  export default Vue.extend({
    computed: {
      message() {
        return "Test nativescript-tracking-transparency";
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
