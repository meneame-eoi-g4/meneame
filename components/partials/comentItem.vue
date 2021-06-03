<template>
  <div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            
            <img
              
              src="https://bulma.io/images/placeholders/96x96.png"
              alt=""
            />
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{{ value.author.name }}</p>
          <p class="subtitle is-6">@{{ value.author.name }}</p>
        </div>
      </div>

      <div class="content">
        {{ value.content }}

        <br />
        <time datetime="2016-1-1">{{ value.date }}</time>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "comentItem",
  props: {
    value: Object,
  },
};
</script>
