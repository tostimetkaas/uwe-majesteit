<template src="./dashboard.component.html"></template>
<style src="./dashboard.component.css" scoped></style>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class DashBoard extends Vue {
  // @Prop() private brandname!: string = " ";
  // @Prop() private msg!: string = "GOEIEMORGEN";
  private msg: string;

  constructor() {
    super();
    const hour: number = new Date().getHours();
    if (hour >= 0 && hour < 6) this.msg = "hey nachtbraker."; 
    else if (hour >= 6 && hour < 12) this.msg = "GOEIEMORGEN";
    else if (hour >= 12 && hour < 18) this.msg = "GOEIEMIDDAG";
    else this.msg = "GOEDENAVOND";
  }
}
</script>
