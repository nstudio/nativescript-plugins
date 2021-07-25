<template>
  <Page>
    <ActionBar>
      <Label text="nativescript-plaid"/>
    </ActionBar>

    <GridLayout>
      <Button class="info" :text="message"/>
    </GridLayout>
  </Page>
</template>

<script lang="ts">
  import Vue from "nativescript-vue";
  import { DemoSharedNativescriptPlaid } from '@demo/shared';
  import { } from '@nstudio/nativescript-plaid';

  export default Vue.extend({
    computed: {
      message() {
        return "Test nativescript-plaid";
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
