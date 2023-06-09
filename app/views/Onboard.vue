<template>
  <Page actionBarHidden="true">
    <GridLayout>
      <AbsoluteLayout width="100%" height="100%">
        <GridLayout width="100%" height="100%">
          <Carousel
            ref="myCarousel"
            v-if="hasItems"
            height="100%"
            width="100%"
            @pageChanged="myChangePageEvent"
            android:indicatorAnimation="slide"
            indicatorColor="white"
            indicatorOffset="0, -10"
            showIndicator="true"
          >
            <CarouselItem
              width="100%"
              height="10%"
              v-for="(item, i) in onboardData"
              :key="i"
              verticalAlignment="middle"
              @tap="myTapPageEvent"
            >
              <AbsoluteLayout width="100%" height="100%" :background="item.bg">
                <Image
                  width="100%"
                  height="100%"
                  :src="item.img"
                  stretch="aspectFill"
                />
                <Label v-if="item.isSkip" text="Skip  >" class="isSkip" />
                <Label :text="item.title" class="o-title" />
                <Label :text="item.content" class="o-desc" textWrap="true" />
              </AbsoluteLayout>
            </CarouselItem>
          </Carousel>
        </GridLayout>

        <Image src="res://v" class="logo" />

        <FlexboxLayout class="o-btn">
            <Button text="Log In" class="middle-btn" @tap="goToLogin" />
            <Button text="Sign Up" class="middle-btn w-btn" @tap="goToSignin" />
        </FlexboxLayout>

      </AbsoluteLayout>
    </GridLayout>
  </Page>
</template>

<script src="../js/onboard.js"></script>

<style src="../android.scss" lang="scss"></style>
