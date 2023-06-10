<template>
  <Page actionBarHidden="true">
    <GridLayout rows="90, *, 90">
      <FlexboxLayout row="0" class="top-menu">
        <Label text.decode="&#xf002;" class="fas h-menu-btn" />
        <Label text.decode="&#xf007;" class="fas h-menu-btn" />
      </FlexboxLayout>
      <!-- Component Dynamic -->
      <StackLayout row="1">
        <component :is="tab" />
      </StackLayout>
      <!-- Component Dynamic -->
      <FlexboxLayout class="bottom-menu" row="2">
        <StackLayout class="h-bottom-box" @tap="feed()" orientation="vertical">
          <Label text.decode="&#xf09e;" class="fas h-bottom-btn" />
          <Label text="Feed" class="h-bottom-txt" />
        </StackLayout>
        <StackLayout class="h-bottom-box" orientation="vertical">
          <Label text.decode="&#xf012;" class="fas h-bottom-btn" />
          <Label text="Progress" class="h-bottom-txt" />
        </StackLayout>

        <DockLayout class="vb-box">
          <Image dock="center" src="res://v" class="vb-logo" />
        </DockLayout>

        <StackLayout class="h-bottom-box" @tap="store()" orientation="vertical">
          <Label text.decode="&#xf290;" class="fas h-bottom-btn" />
          <Label text="Store" class="h-bottom-txt" />
        </StackLayout>
        <StackLayout class="h-bottom-box" orientation="vertical">
          <Label text.decode="&#xf03a;" class="fas h-bottom-btn" />
          <Label text="Menu" class="h-bottom-txt" />
        </StackLayout>
      </FlexboxLayout>
    </GridLayout>
  </Page>
</template>

<script src="../js/home.js"></script>

<style src="../android.scss" lang="scss"></style>
