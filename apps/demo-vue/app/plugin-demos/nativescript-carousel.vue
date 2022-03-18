<template>
  <Page>
    <ActionBar>
      <Label text="nativescript-carousel"/>
    </ActionBar>

    <GridLayout>
      <Button class="info" :text="message"/>
    </GridLayout>
  </Page>
</template>

<script lang="ts">
  import Vue from "nativescript-vue";
  import { DemoSharedNativescriptCarousel } from '@demo/shared';
  import { } from '@nstudio/nativescript-carousel';

  export default Vue.extend({
    computed: {
      message() {
        return "Test nativescript-carousel";
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
