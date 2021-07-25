<template>
  <Page>
    <ActionBar>
      <Label text="nativescript-input-mask"/>
    </ActionBar>

    <GridLayout>
      <Button class="info" :text="message"/>
    </GridLayout>
  </Page>
</template>

<script lang="ts">
  import Vue from "nativescript-vue";
  import { DemoSharedNativescriptInputMask } from '@demo/shared';
  import { } from '@nstudio/nativescript-input-mask';

  export default Vue.extend({
    computed: {
      message() {
        return "Test nativescript-input-mask";
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
