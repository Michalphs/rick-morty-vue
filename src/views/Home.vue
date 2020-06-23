<template>
  <div class="home">
    <Searchbar v-on:change="handleSearch" />
    <div v-if="characters" class="mt-8 md:grid md:grid-cols-4 md:gap-8 container mx-auto z-10">
      <div v-for="character of characters" :key="character.id">
        <Character :character="character" />
      </div>
    </div>
  </div>
</template>

<script>
import Character from "@/components/Character.vue";
import Searchbar from "@/components/Searchbar.vue";
import characterService from "@/services/character";

export default {
  name: "Home",
  components: {
    Character,
    Searchbar,
  },
  data() {
    return {
      characters: null,
      error: false,
      isLoading: false,
      genders: ["Female", "Male", "Genderless", "Unknown"],
    };
  },
  created() {
    this.fetchCharacters();
  },
  methods: {
    handleSearch(name, gender) {
      const params = {
        name: name || null,
        gender: gender || null,
      };

      this.fetchCharacters(params);
    },
    async fetchCharacters(params) {
      try {
        this.isLoading = true;
        const { data } = await characterService.getCharacters(params);
        this.isLoading = false;
        this.characters = data.results;
      } catch (err) {
        console.log(err);
        this.isLoading = false;
        this.error = err;
        this.characters = null;
      }
    },
  },
};
</script>

<style>
.vs__dropdown-toggle input::placeholder {
  color: theme("colors.gray.500");
}

.vs__search::placeholder,
.vs__dropdown-toggle,
.vs__dropdown-menu {
  min-height: 100%;
  border: none;
}

.vs__dropdown-option--highlight {
  background: theme("colors.green.500");
}
.vs__dropdown-menu {
  top: 100%;
}

.vs__clear,
.vs__open-indicator {
  fill: theme("colors.gray.600");
}
</style>
