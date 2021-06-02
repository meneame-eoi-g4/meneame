<template>
<div>
  <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="#">
      <img src="../static/imgs/logo.png" width="112" height="28">
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item" href="/">
        Home
      </a>

      <a class="navbar-item">
        Documentation
      </a>
      <h3 v-if="isAuth" class="navbar-item">
       {{currentUser.firstname}}
      </h3>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
          
          </a>
        
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <nuxt-link class="button is-primary"  v-if="!isAuth" to="/registro">
            <strong>Crear cuenta</strong>
          </nuxt-link>
          <nuxt-link v-if="!isAuth" class="button is-light"  to="/login">
            Log in
          </nuxt-link>
          <button v-if="isAuth" class="button is-light"  @click="logout">
            Log out
          </button>
          <nuxt-link v-if="isAuth" class="button is-light"  to="/post">
           postear
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</nav>
</div>
</template>
<script>


export default {
  name: "MainNav",
  props: {
    items: Array,
  },
  computed: {
    isAuth() {
      return this.$store.getters.isAuth
    },
    
    currentUser() {
      return this.$store.getters.currentUser
    },
  },
  methods: {
      logout() {
      this.$store.dispatch('logout')

      this.$router.push("/")
    }
  },
  
  };
</script>