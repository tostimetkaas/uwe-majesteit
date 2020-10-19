<template src="./login.component.html"></template>
<style src="./login.component.css" scoped></style>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import GoogleSignInButton from 'vue-google-signin-button-directive'

@Component
export default class Login extends Vue {
  // @Prop() private brandname!: string;
  public googleSignInParams: any;
  clientId = "911526944587-bf7ev0p2u9de47qk163jpr7rgqmh9emo.apps.googleusercontent.com";

  mounted() {
    // if (!window.gapi) {
    //   throw new Error(
    //     '"https://apis.google.com/js/api:client.js" needs to be included as a <script>.'
    //   );
    // }
    //
    // if (!this.clientId) {
    //   throw new Error("Client Id must be specified.");
    // }
    this.googleSignInParams = {
      cliendId: this.clientId
    }
  }

  onSignInSuccess(googleUser: any) {
    // `googleUser` is the GoogleUser object that represents the just-signed-in user.
    // See https://developers.google.com/identity/sign-in/web/reference#users
    const profile = googleUser.getBasicProfile();
    console.log(profile);
  }

  onSignInError(error: any) {
    // `error` contains any error occurred.
    console.log('OH NOES', error);
  }
}
</script>
