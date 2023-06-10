<template>
  <StackLayout height="100%" class="top-borders">
    <StackLayout class="c-forms">
      <AbsoluteLayout class="c-form">
        <Label text="E-mail" class="c-form-label" />
        <TextField hint="dadado@email.com" class="c-form-field" />
      </AbsoluteLayout>
      <AbsoluteLayout class="c-form">
        <Label text="Password" class="c-form-label" />
        <TextField hint="********" secure="true" class="c-form-field" />
      </AbsoluteLayout>
      <Label text="Forgot password?" class="c-form-forgot" />
    </StackLayout>
    <StackLayout class="c-btns">
      <StackLayout class="c-btns-box" orientation="vertical">
        <Button class="middle-btn" text="Continue" />
        <StackLayout class="c-or" orientation="horizontal">
          <StackLayout class="c-line" />
          <Label text="or" class="c-or-text" />
          <StackLayout class="c-line" />
        </StackLayout>
        <Button class="middle-btn bg-img" text="Sign Up With Google" />
      </StackLayout>
    </StackLayout>
  </StackLayout>
</template>

<script src="../js/login.js"></script>

<style src="../android.scss" lang="scss"></style>
