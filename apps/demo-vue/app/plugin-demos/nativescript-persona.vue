<template>
  <Page>
    <ActionBar>
      <Label text="nativescript-persona"/>
    </ActionBar>

    <GridLayout>
      <Button class="info" :text="message"/>
    </GridLayout>
  </Page>
</template>

<script lang="ts">
  import Vue from "nativescript-vue";
  import { DemoSharedNativescriptPersona } from '@demo/shared';
  import { } from '@nstudio/nativescript-persona';

  export default Vue.extend({
    computed: {
      message() {
        return "Test nativescript-persona";
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
