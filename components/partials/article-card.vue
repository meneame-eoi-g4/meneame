<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        {{ value.title }}
      </p>
    </header>
    <div class="card-content">
      <div class="content">
        {{ value.content }}

        <br />
        <time datetime="2016-1-1">{{ value.published_at }}</time>
      </div>
    </div>
    <footer class="card-footer">
      <a @click="like" class="card-footer-item">Like {{ value.positive }}</a>
      <a @click="dislike" class="card-footer-item">Dislike {{ value.negative }}</a>
      <a href="#" class="card-footer-item">Comentar</a>
    </footer>
  </div>
</template>
<script>
export default {
  name: "articleItem",
  props: {
    value: Object,
  },
  methods: {
    async like() {
      try {
        this.value.positive++;
        console.log(this.value);
        await this.$api.articles.like(this.value);
      } catch (error) {}
    },
    async dislike() {
      try {
        this.value.negative++;
        console.log(this.value);
        await this.$api.articles.dislike(this.value);
      } catch (error) {}
    },
  },
};
</script>
