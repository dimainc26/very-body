<template>
    <StackLayout orientation="vertical">
     <Label text="Store" class="title" />

     <ScrollView orientation="vertical">
        <StackLayout orientation="vertical">

            <AbsoluteLayout v-for="(item, index) in storeData" :key="index"  class="store-box" :background="item.bg" >
                <Image :src="item.img" class="store-img" />
                <Label :text="item.title" class="store-title" />
            </AbsoluteLayout>

        </StackLayout>
     </ScrollView>
    </StackLayout>
  </template>
  
  <script src="../js/store.js"></script>
  
  <style src="../android.scss" lang="scss"></style>
  