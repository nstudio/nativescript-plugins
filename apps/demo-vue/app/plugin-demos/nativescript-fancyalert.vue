<template>
  <Page>
    <ActionBar>
      <Label text="nativescript-fancyalert"/>
    </ActionBar>

    <GridLayout>
      <Button class="info" :text="message"/>
    </GridLayout>
  </Page>
</template>

<script lang="ts">
  import Vue from "nativescript-vue";
  import { DemoSharedNativescriptFancyalert } from '@demo/shared';
  import { } from '@nstudio/nativescript-fancyalert';

  export default Vue.extend({
    computed: {
      message() {
        return "Test nativescript-fancyalert";
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
