<template>
  <ScrollView orientation="vertical" scrollBarIndicatorVisible="false"  >
    <StackLayout class="top-borders" orientation="vertical">
      <StackLayout class="c-forms">
        <AbsoluteLayout class="c-form">
          <Label text="Username" class="c-form-label" />
          <TextField hint="Drick22" class="c-form-field" />
        </AbsoluteLayout>
        <AbsoluteLayout class="c-form">
          <Label text="E-mail" class="c-form-label" />
          <TextField hint="dadado@email.com" class="c-form-field" />
        </AbsoluteLayout>
        <AbsoluteLayout class="c-form">
          <Label text="Create Password" class="c-form-label" />
          <TextField hint="********" secure="true" class="c-form-field" />
        </AbsoluteLayout>
        <AbsoluteLayout class="c-form">
          <Label text="Confirm Password" class="c-form-label" />
          <TextField hint="********" secure="true" class="c-form-field" />
        </AbsoluteLayout>
      </StackLayout>
      <StackLayout class="c-btns">
        <StackLayout class="c-btns-box" orientation="vertical">
          <Button class="middle-btn" text="Continue" @tap="goToHome" />
          <StackLayout class="c-or" orientation="horizontal">
            <StackLayout class="c-line" />
            <Label text="or" class="c-or-text" />
            <StackLayout class="c-line" />
          </StackLayout>
          <Button class="middle-btn bg-img" text="Sign In With Google" />
        </StackLayout>
      </StackLayout>
    </StackLayout>
  </ScrollView>
</template>

<script src="../js/signin.js"></script>

<style src="../android.scss" lang="scss"></style>
