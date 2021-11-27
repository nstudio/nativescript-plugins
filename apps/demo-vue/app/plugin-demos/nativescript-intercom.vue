<template>
  <Page>
    <ActionBar>
      <Label text="nativescript-intercom"/>
    </ActionBar>

    <GridLayout>
      <Button class="info" :text="message"/>
    </GridLayout>
  </Page>
</template>

<script lang="ts">
  import Vue from "nativescript-vue";
  import { DemoSharedNativescriptIntercom } from '@demo/shared';
  import { } from '@nstudio/nativescript-intercom';

  export default Vue.extend({
    computed: {
      message() {
        return "Test nativescript-intercom";
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
