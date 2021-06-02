<template>
  <div>
    <mainNav />
    <nuxt />
  </div>
</template>

<script>
import mainNav from "@components/mainNav";
export default {
  data() {
    return {};
  },
  components: {
    mainNav,
  },
  mounted() {
    //const token = localStorage.getItem('jwt-token')
    const token = this.$cookies.get("jwt-token");

    this.$store.dispatch("login", token);
  },
};
</script>
