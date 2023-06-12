
<template>
   <StackLayout orientation="vertical">
      <Label text="Progress" class="title" />

      <ScrollView orientation="horizontal" scrollBarIndicatorVisible="false">
         <StackLayout orientation="horizontal">
            <FlexboxLayout class="p-box">

               <StackLayout v-for="(item, index) in progressData" :key="index" class="data-box" orientation="vertical">
                  <AbsoluteLayout class="p-day-datas">
                     <FlexboxLayout class="datas">
                        <StackLayout class="data-unpoint" :height="item.percent"></StackLayout>
                     </FlexboxLayout>
                     <StackLayout class="data-point"></StackLayout>
                  </AbsoluteLayout>
                  <Label :text="item.dLetter" textWrap="true" class="data-txt" />
                  <Label :text="item.day" textWrap="true" class="data-numb" />
               </StackLayout>

               
               
            </FlexboxLayout>
            <Button text="+" class="my-btn" />
         </StackLayout>
      </ScrollView>

   </StackLayout>
</template>
  
<script src="../js/progress.js"></script>
  
<style src="../android.scss" lang="scss"></style>
  