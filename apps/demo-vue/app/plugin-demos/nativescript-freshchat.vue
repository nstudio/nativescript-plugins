<template>
  <Page>
    <ActionBar>
      <Label text="nativescript-freshchat"/>
    </ActionBar>

    <GridLayout>
      <Button class="info" :text="message"/>
    </GridLayout>
  </Page>
</template>

<script lang="ts">
  import Vue from "nativescript-vue";
  import { DemoSharedNativescriptFreshchat } from '@demo/shared';
  import { } from '@nstudio/nativescript-freshchat';

  export default Vue.extend({
    computed: {
      message() {
        return "Test nativescript-freshchat";
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
