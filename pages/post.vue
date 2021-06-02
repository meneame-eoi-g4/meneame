<template>
  <div>
    <div class="field has-addons">
      <div class="control is-expanded">
        <div class="select is-fullwidth">
          <select name="categoria" v-model="categoria">
            <option value="cosas">cosas</option>
          </select>
        </div>
      </div>
    </div>
    <div class="control">
      <input class="input" type="text" placeholder="url de imagen de cabecera" v-model="img" />
    </div>
     <div class="control">
      <input class="input" type="text" placeholder="url de origen" v-model="slug" />
    </div>

    <div class="control">
      <input class="input" type="text" placeholder="titulo" v-model="title" />
    </div>
    <br />
    <div class="field">
      <div class="control">
        <textarea
          class="textarea is-large"
          placeholder="contenido"
          v-model="content"
        ></textarea>
      </div>
    </div>
    <button class="button is-warning" @click="post">postear</button>
  </div>
</template>
<script>
export default {
  name: "post",

  head() {
    return {
      title: "postear",
    };
  },
  computed: {
    currentUser() {
      return this.$store.getters.currentUser;
    },
  },

  data() {
    return {
      title: "",
      categoria: "",
      content: "",
      img: "",
      slug: "",

      //desmarcado por defecto (por ley)
    };
  },
  methods: {
    async post() {
      try {
        console.log("boton pulsado");

        const newPost = {
          author: {
            name: currentUser.firstname,
            img: currentUser.avatar,
          },
          categoria: this.categoria,
          img: this.img,
          slug: this.slug,

          content: this.content,
        };

        console.log(newPost);
        await this.$api.message.send(newPost);

        this.$router.push("/index");
      } catch (error) {
        this.errorMessage = error.message;
        this.hasErrors = true;
      }
    },
  },
};
</script>
