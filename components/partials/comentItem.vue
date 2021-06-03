<template>
<div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img v-if="value.author.img" src=value.author.img alt="Placeholder image">
          <img v-if="!value.author.img" src='https://img2.freepng.es/20180616/sxr/kisspng-avatar-computer-icons-avatar-icon-5b254abb7cf344.7556131215291706195118.jpg' alt="Placeholder image">
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">{{value.author.name}}</p>
        <p class="subtitle is-6">@{{value.author.name}}</p>
      </div>
    </div>

    <div class="content">
     {{value.content}}
      <a href="#">#css</a> <a href="#">#responsive</a>
      <br>
      <time datetime="2016-1-1">{{value.date}}</time>
    </div>
  </div>
</template>
<script>
export default {
    name: "comentItem",
  props: {
    value: Object,
  }
}
</script>