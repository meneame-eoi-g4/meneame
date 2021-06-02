<template>
    <div class="card">
  <header class="card-header">
    <p class="card-header-title">
      {{value.title}}
    </p>
    
  </header>
  <div class="card-content">
    <div class="content">
      {{value.content}}
    
      <br>
      <time datetime="2016-1-1">{{value.date}}</time>
    </div>
  </div>
  <footer class="card-footer">
    <span class="icon-text">
  <span class="icon">
    <i class="fa-solid fa-thumbs-up"></i>
  </span>
  
</span>
    <span class="icon-text">
  <span class="icon">
    <i class="fa-solid fa-thumbs-down"></i>
  </span>
  
</span>
    <span class="icon-text">
  <span class="icon">
    <i class="fa-solid fa-comment-pen"></i>
  </span>
  
</span>
  </footer>
</div>
</template>
<script>
export default {
    name: "articleItem",
    props: {
        value: Object
    }
}
</script>