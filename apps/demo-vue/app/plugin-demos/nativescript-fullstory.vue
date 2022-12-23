<template>
  <Page>
    <ActionBar>
      <Label text="nativescript-fullstory"/>
    </ActionBar>

    <GridLayout>
      <Button class="info" :text="message"/>
    </GridLayout>
  </Page>
</template>

<script lang="ts">
  import Vue from "nativescript-vue";
  import { DemoSharedNativescriptFullstory } from '@demo/shared';
  import { } from '@nstudio/nativescript-fullstory';

  export default Vue.extend({
    computed: {
      message() {
        return "Test nativescript-fullstory";
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
