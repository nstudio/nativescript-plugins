<template>
  <Page>
    <ActionBar>
      <Label text="nativescript-splitsheet"/>
    </ActionBar>

    <GridLayout>
      <Button class="info" :text="message"/>
    </GridLayout>
  </Page>
</template>

<script lang="ts">
  import Vue from "nativescript-vue";
  import { DemoSharedNativescriptSplitsheet } from '@demo/shared';
  import { } from '@nstudio/nativescript-splitsheet';

  export default Vue.extend({
    computed: {
      message() {
        return "Test nativescript-splitsheet";
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
