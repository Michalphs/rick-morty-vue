<template>
  <div class="shadow-lg rounded-b-lg">
    <img class="rounded-t-lg" :src="character.image" />
    <div class="px-4 py-6 bg-white">
      {{ character.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Character",
  props: {
    character: {
      type: Object,
      required: true,
    },
  },
};
</script>
