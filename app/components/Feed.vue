<template>
    <StackLayout orientation="vertical">
     <Label text="Feed" class="title" />

     <ScrollView orientation="vertical" scrollBarIndicatorVisible="false" >
        <StackLayout orientation="vertical">

            <AbsoluteLayout v-for="(item, index) in feedData" :key="index"  class="feed-box">
                <Image :src="item.img" class="feed-img" />
                <FlexboxLayout class="feed-txt-box">
                    <Label :text="item.text" textWrap="true" class="feed-txt" />
                </FlexboxLayout>
                <Label :text="item.likes" class="feed-like" />
                <Button v-if="item.isLike" class="like-btn bg-like" />
                <Button v-else class="like-btn" />
                <Label :text="`@` + item.author + ` | ` + item.date " class="feed-author" />
            </AbsoluteLayout>

        </StackLayout>
     </ScrollView>
    </StackLayout>
  </template>
  
  <script src="../js/feed.js"></script>
  
  <style src="../android.scss" lang="scss"></style>
  