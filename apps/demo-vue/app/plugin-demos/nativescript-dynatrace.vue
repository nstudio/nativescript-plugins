<template>
  <Page>
    <ActionBar>
      <Label text="nativescript-dynatrace"/>
    </ActionBar>

    <GridLayout>
      <Button class="info" :text="message"/>
    </GridLayout>
  </Page>
</template>

<script lang="ts">
  import Vue from "nativescript-vue";
  import { DemoSharedNativescriptDynatrace } from '@demo/shared';
  import { } from '@nstudio/nativescript-dynatrace';

  export default Vue.extend({
    computed: {
      message() {
        return "Test nativescript-dynatrace";
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
