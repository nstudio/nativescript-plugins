<template>
  <Page>
    <ActionBar>
      <Label text="nativescript-embrace"/>
    </ActionBar>

    <GridLayout>
      <Button class="info" :text="message"/>
    </GridLayout>
  </Page>
</template>

<script lang="ts">
  import Vue from "nativescript-vue";
  import { DemoSharedNativescriptEmbrace } from '@demo/shared';
  import { } from '@nstudio/nativescript-embrace';

  export default Vue.extend({
    computed: {
      message() {
        return "Test nativescript-embrace";
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
