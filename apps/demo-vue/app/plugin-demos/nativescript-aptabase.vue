<template>
  <Page>
    <ActionBar>
      <Label text="nativescript-aptabase"/>
    </ActionBar>

    <GridLayout>
      <Button class="info" :text="message"/>
    </GridLayout>
  </Page>
</template>

<script lang="ts">
  import Vue from "nativescript-vue";
  import { DemoSharedNativescriptAptabase } from '@demo/shared';
  import { } from '@nstudio/nativescript-aptabase';

  export default Vue.extend({
    computed: {
      message() {
        return "Test nativescript-aptabase";
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
