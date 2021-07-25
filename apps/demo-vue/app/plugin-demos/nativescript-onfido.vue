<template>
  <Page>
    <ActionBar>
      <Label text="nativescript-onfido"/>
    </ActionBar>

    <GridLayout>
      <Button class="info" :text="message"/>
    </GridLayout>
  </Page>
</template>

<script lang="ts">
  import Vue from "nativescript-vue";
  import { DemoSharedNativescriptOnfido } from '@demo/shared';
  import { } from '@nstudio/nativescript-onfido';

  export default Vue.extend({
    computed: {
      message() {
        return "Test nativescript-onfido";
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
