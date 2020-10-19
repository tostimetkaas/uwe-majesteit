<style src="./main.css"></style>
<template>
  <div id="app">
    <Navbar brandname="Uwe majesteit" />

    <section id="main-container">
      <router-view></router-view>
    </section>

    <Footer brandname="Uwe majesteit" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DashBoard from './components/dashboard/dashboard.component.vue';
import Footer from '@/components/footer/footer.component.vue';
import Navbar from './components/navbar/navbar.component.vue';
import PrivacyStatement from '@/components/privacy/privacy.component.vue';

@Component({
  components: {
    DashBoard,
    Footer,
    Navbar,
    PrivacyStatement,
  },
})
export default class App extends Vue {}
</script>
