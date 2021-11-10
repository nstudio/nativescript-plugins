<template>
  <Page>
    <ActionBar>
      <Label text="nativescript-qr"/>
    </ActionBar>

    <GridLayout>
      <Button class="info" :text="message"/>
    </GridLayout>
  </Page>
</template>

<script lang="ts">
  import Vue from "nativescript-vue";
  import { DemoSharedNativescriptQr } from '@demo/shared';
  import { } from '@nstudio/nativescript-qr';

  export default Vue.extend({
    computed: {
      message() {
        return "Test nativescript-qr";
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
