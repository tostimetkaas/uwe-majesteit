<template src="./privacy.component.html"></template>
<style src="./privacy.component.css" scoped></style>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class PrivacyStatement extends Vue {
  // @Prop() private brandname!: string;
  isDutch: boolean = false;
}
</script>
