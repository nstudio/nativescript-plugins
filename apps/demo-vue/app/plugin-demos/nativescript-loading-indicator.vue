<template>
  <Page>
    <ActionBar>
      <Label text="nativescript-loading-indicator"/>
    </ActionBar>

    <GridLayout>
      <Button class="info" :text="message"/>
    </GridLayout>
  </Page>
</template>

<script lang="ts">
  import Vue from "nativescript-vue";
  import { DemoSharedNativescriptLoadingIndicator } from '@demo/shared';
  import { } from '@nstudio/nativescript-loading-indicator';

  export default Vue.extend({
    computed: {
      message() {
        return "Test nativescript-loading-indicator";
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
