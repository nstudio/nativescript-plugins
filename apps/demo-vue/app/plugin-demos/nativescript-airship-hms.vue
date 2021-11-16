<template>
  <Page>
    <ActionBar>
      <Label text="nativescript-airship-hms"/>
    </ActionBar>

    <GridLayout>
      <Button class="info" :text="message"/>
    </GridLayout>
  </Page>
</template>

<script lang="ts">
  import Vue from "nativescript-vue";
  import { DemoSharedNativescriptAirshipHms } from '@demo/shared';
  import { } from '@nstudio/nativescript-airship-hms';

  export default Vue.extend({
    computed: {
      message() {
        return "Test nativescript-airship-hms";
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
