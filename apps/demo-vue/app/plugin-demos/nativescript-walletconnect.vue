<template>
  <Page>
    <ActionBar>
      <Label text="nativescript-walletconnect"/>
    </ActionBar>

    <GridLayout>
      <Button class="info" :text="message"/>
    </GridLayout>
  </Page>
</template>

<script lang="ts">
  import Vue from "nativescript-vue";
  import { DemoSharedNativescriptWalletconnect } from '@demo/shared';
  import { } from '@nstudio/nativescript-walletconnect';

  export default Vue.extend({
    computed: {
      message() {
        return "Test nativescript-walletconnect";
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
