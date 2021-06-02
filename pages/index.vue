<template>
   <main-wall :articles="articles"/>
</template>

<script>
import mainWall from '~/components/mainWall.vue';


export default {
  name: "HomePage",
  components: {
    mainWall
  },
  head(){
    return {
      title: 'Página principal'
    }
  },
  async asyncData(context){
    try {
      const articles = await context.app.$api.articles.list();

      return {articles}
    } catch (error) {
      console.error(error.message);
    }
  },
};
</script>
