<template>
  <main class="columns mx-6 mb-0 has-background-success-dark full">
    <section class="column">
      <div class="columns is-multiline">
        <article-card v-for="item in article" :key="item._id" :value="item" />
      </div>
      <coments-wall
        v-for="item in article"
        :key="item._id"
        :value="item.coments"
        @coment="coment(item)"
      />
    </section>
  </main>
</template>

<script>
import ArticleCard from "../../components/partials/article-card";
import comentsWall from "../../components/comentsWall";
export default {
  name: "Articulo",
  data() {
    return {};
  },
  components: {
    ArticleCard,
    comentsWall,
  },
  computed: {
    currentUser() {
      return this.$store.getters.currentUser;
    },
  },
  methods: {
    async coment(article) {
      try {
        console.log("he pulsado");
        const newComent = {
          author: {
            name: this.currentUser.firstname,
            img:
              this.currentUser.avatar ||
              "https://img2.freepng.es/20180616/sxr/kisspng-avatar-computer-icons-avatar-icon-5b254abb7cf344.7556131215291706195118.jpg",
          },
          content: this.content,
        };

        article.coments.push(newComent);
        console.log(article)
        await this.$api.articles.coment(article);
      } catch (error) {}
    },
  },
  async asyncData(context) {
    try {
      const articles = await context.app.$api.articles.list();
      let articleId = context.params.id;
      if (articleId) {
        let article = articles.filter((item) => item._id === articleId);
        console.log(article);
        return { article };
      } else {
        return { articles };
      }
    } catch (error) {
      console.error(error.message);
    }
  },
};
</script>
