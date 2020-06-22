<template>
  <div id="app" class="flex flex-col bg-gray-100">
    <Navbar />
    <router-view class="flex-1" />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import "./assets/css/tailwind.css";
import "vue-select/dist/vue-select.css";

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>
