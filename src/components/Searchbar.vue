<template>
  <div class="container mx-auto">
    <div class="flex mt-8 h-10 rounded-full shadow-lg ">
      <input
        type="text"
        placeholder="Type name here..."
        v-model="name"
        class="flex-1 rounded-l-full pl-4 outline-none border-r"
      />
      <v-select
        v-model="gender"
        class="bg-white w-64"
        placeholder="Choose gender"
        :options="genders"
      ></v-select>
      <button
        class="bg-green-500 text-white px-8 hover:bg-green-400 rounded-r-full"
        @click="$emit('handleChange', name, gender)"
      >
        Search
      </button>
    </div>
  </div>
</template>

<script>
import vSelect from "vue-select";

export default {
  name: "Searchbar",
  components: {
    vSelect,
  },

  data() {
    return {
      name: "",
      gender: "",
      genders: ["Female", "Male", "Genderless", "Unknown"],
    };
  },
};
</script>
