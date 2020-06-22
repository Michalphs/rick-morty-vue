<template>
  <nav class="shadow-lg py-6 bg-white z-10">
    <div class="flex items-center justify-between container mx-auto">
      <div><img alt="Vue logo" class="h-8" src="../assets/logo.png" /></div>
      <div class="flex items-center">
        <router-link class="mr-8 hover:text-green-500" to="/">Home</router-link>
        <router-link class="mr-8 hover:text-green-500" to="/about">About</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
