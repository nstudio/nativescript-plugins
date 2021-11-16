<template>
  <Page>
    <ActionBar>
      <Label text="nativescript-airship-fcm"/>
    </ActionBar>

    <GridLayout>
      <Button class="info" :text="message"/>
    </GridLayout>
  </Page>
</template>

<script lang="ts">
  import Vue from "nativescript-vue";
  import { DemoSharedNativescriptAirshipFcm } from '@demo/shared';
  import { } from '@nstudio/nativescript-airship-fcm';

  export default Vue.extend({
    computed: {
      message() {
        return "Test nativescript-airship-fcm";
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
