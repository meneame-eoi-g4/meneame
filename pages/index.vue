<template>
   <main-wall :articles="articles"/>
</template>

<script>

export default {
  name: "HomePage",
  components: {
   
  },
  head(){
    return {
      title: 'Página principal'
    }
  },
  async asyncData(context){
    console.info("AsyncData")
    try {
      const articles = await context.app.$api.articles.list();

      return {articles}
    } catch (error) {
      console.error(error.message);
    }
  },
};
</script>
