<template>
  <Page actionBarHidden="true">
    <GridLayout rows="180,  *, 90" :background="bg" >
      <StackLayout row="0" class="c-logo-box">
        <Image src="res://v" class="c-logo" />
        <Label text="Make your Very-Body !" class="c-title" />
      </StackLayout>
      <StackLayout row="1" orientation="vertical" width="100%" height="100%" >
        <component :is="tab" />
      </StackLayout>
      <StackLayout class="c-new" row="2">
        <Label v-if="isLogin" text="Don't have an account ?" @tap="changeTabSign" class="c-form-done" />
        <Label v-else text="Have already an account ?" @tap="changeTabLog" class="c-form-done" />
      </StackLayout>
    </GridLayout>
  </Page>
</template>

<script src="../js/connection.js"></script>

<style src="../android.scss" lang="scss"></style>
