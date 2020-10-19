<template src="./footer.component.html"></template>
<style src="./footer.component.css" scoped></style>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {
  @Prop() private brandname!: string;
}
</script>
