<template>
  <div>
    Welcome
    <v-link href="/about">어바웃</v-link>
  </div>
</template>

<script>
import VLink from "@/components/VLink";

export default {
  name: "Welcome",
  components: { VLink },
};
</script>

<style scoped>
</style>