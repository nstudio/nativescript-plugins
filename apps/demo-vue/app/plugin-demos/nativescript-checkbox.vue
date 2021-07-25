<template>
  <Page>
    <ActionBar>
      <Label text="nativescript-checkbox"/>
    </ActionBar>

    <GridLayout>
      <Button class="info" :text="message"/>
    </GridLayout>
  </Page>
</template>

<script lang="ts">
  import Vue from "nativescript-vue";
  import { DemoSharedNativescriptCheckbox } from '@demo/shared';
  import { } from '@nstudio/nativescript-checkbox';

  export default Vue.extend({
    computed: {
      message() {
        return "Test nativescript-checkbox";
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
