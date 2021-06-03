<template>
  <main class="columns mx-6 mb-0 has-background-success-dark full">
    <section class="column">
      <div class="columns is-multiline">
        <article-card v-for="item in article" :key="item._id"
          :value="item"
        />
      </div>
    </section>
  </main>
</template>

<script>
import ArticleCard from '../../components/partials/article-card';
export default {
name: "Articulo",
data(){
  return{
  }
},
components:{
  ArticleCard
},
  async asyncData(context) {
    try {
      const articles = await context.app.$api.articles.list();
      let articleId = context.params.id
      if (articleId) {
      let article = articles.filter(item => item._id === articleId)
      console.log(article)
      return { article };

      }else {

      return { articles };
      }
    } catch (error) {
      console.error(error.message);
    }
  },
}
</script>
