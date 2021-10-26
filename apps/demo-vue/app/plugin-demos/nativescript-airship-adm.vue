<template>
  <Page>
    <ActionBar>
      <Label text="nativescript-airship-adm"/>
    </ActionBar>

    <GridLayout>
      <Button class="info" :text="message"/>
    </GridLayout>
  </Page>
</template>

<script lang="ts">
  import Vue from "nativescript-vue";
  import { DemoSharedNativescriptAirshipAdm } from '@demo/shared';
  import { } from '@nstudio/nativescript-airship-adm';

  export default Vue.extend({
    computed: {
      message() {
        return "Test nativescript-airship-adm";
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
