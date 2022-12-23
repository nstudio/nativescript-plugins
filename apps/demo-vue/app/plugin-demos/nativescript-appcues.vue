<template>
  <Page>
    <ActionBar>
      <Label text="nativescript-appcues"/>
    </ActionBar>

    <GridLayout>
      <Button class="info" :text="message"/>
    </GridLayout>
  </Page>
</template>

<script lang="ts">
  import Vue from "nativescript-vue";
  import { DemoSharedNativescriptAppcues } from '@demo/shared';
  import { } from '@nstudio/nativescript-appcues';

  export default Vue.extend({
    computed: {
      message() {
        return "Test nativescript-appcues";
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
