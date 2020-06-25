<template>
  <div class="container mx-auto mt-8 flex justify-center">
    <button
      @click="$emit('change', 1)"
      class="w-24 py-2 border-gray-500 border hover:bg-green-500 hover:text-white hover:border-green-500 rounded-l-lg"
    >
      First
    </button>
    <button
      @click="$emit('change', prevPage)"
      class="w-24 py-2 border-gray-500 border hover:bg-green-500 hover:text-white hover:border-green-500 border-l-0"
    >
      Previous
    </button>
    <button
      @click="$emit('change', nextPage)"
      class="w-24 py-2 border-gray-500 border hover:bg-green-500 hover:text-white hover:border-green-500 border-l-0"
    >
      Next
    </button>
    <button
      @click="$emit('change', pages)"
      class="disabled:opacity-75 w-24 py-2 border-gray-500 border hover:bg-green-500 hover:text-white hover:border-green-500 border-l-0 rounded-r-lg"
    >
      Last
    </button>
  </div>
</template>

<script>
import getParamFromUrl from "@/helpers/getParamFromUrl";

export default {
  name: "Pagination",
  props: {
    count: Number,
    next: String,
    pages: Number,
    prev: String,
  },
  data() {
    return {
      currentPage: null,
      nextPage: null,
      prevPage: null,
    };
  },
  methods: {
    setCurrentPage() {
      const nextPage = parseFloat(getParamFromUrl(this.next, "page"));
      const prevPage = parseFloat(getParamFromUrl(this.prev, "page"));

      this.currentPage = nextPage + 1 || prevPage - 1;
      this.prevPage = prevPage;
      this.nextPage = nextPage;
    },
  },
  mounted() {
    this.setCurrentPage();
    console.log(this.nextPage);
  },
  watch: {
    next() {
      this.setCurrentPage();
    },
  },
};
</script>
