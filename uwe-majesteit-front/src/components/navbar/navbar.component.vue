<template src="./navbar.component.html"></template>
<style src="./navbar.component.css" scoped></style>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Navbar extends Vue {
  @Prop() private brandname!: string;
}
</script>
