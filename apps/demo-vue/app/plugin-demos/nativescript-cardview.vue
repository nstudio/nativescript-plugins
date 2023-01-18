<template>
  <Page>
    <ActionBar>
      <Label text="nativescript-cardview"/>
    </ActionBar>

    <GridLayout>
      <Button class="info" :text="message"/>
    </GridLayout>
  </Page>
</template>

<script lang="ts">
  import Vue from "nativescript-vue";
  import { DemoSharedNativescriptCardview } from '@demo/shared';
  import { } from '@nstudio/nativescript-cardview';

  export default Vue.extend({
    computed: {
      message() {
        return "Test nativescript-cardview";
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
