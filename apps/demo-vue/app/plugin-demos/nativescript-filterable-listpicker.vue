<template>
  <Page>
    <ActionBar>
      <Label text="nativescript-filterable-listpicker"/>
    </ActionBar>

    <GridLayout>
      <Button class="info" :text="message"/>
    </GridLayout>
  </Page>
</template>

<script lang="ts">
  import Vue from "nativescript-vue";
  import { DemoSharedNativescriptFilterableListpicker } from '@demo/shared';
  import { } from '@nstudio/nativescript-filterable-listpicker';

  export default Vue.extend({
    computed: {
      message() {
        return "Test nativescript-filterable-listpicker";
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
