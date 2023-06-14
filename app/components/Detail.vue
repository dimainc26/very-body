<template>
    <Page actionBarHidden="true">
        <AbsoluteLayout width="100%" height="100%" class="" :background="$props.item.bg" >
           <Image :src="$props.item.img" stretch="aspectFill" class="d-img" />
           <Label :text="$props.item.title" textWrap="true" class="d-text" />
           <Label :text=" `$ `+ $props.item.price" textWrap="true" class="d-price" />
           <Button text="Buy" class="middle-btn d-btn" />
        </AbsoluteLayout>
    </Page>
</template>
  
<script src="../js/detail.js"></script>
  
<style src="../android.scss" lang="scss"></style>
  