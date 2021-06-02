<template>
<<<<<<< HEAD
 <section>
  <div class="form-group form">
  <input
    v-model="email"
    type="email"
    class="form-control"
    placeholder="Your email"
    @blur="hasErrors=false"
 />
  </div >
<div class="form-group form">              
  <input
    v-model="password"
    type="password"
    class="form-control"
    placeholder="Your password"
    @blur="hasErrors=false"
    />
     </div >

               
  <button class="button is-warning form" @click="login">Login</button>
           
=======
  <section>
    <div class="form-group">
      <input
        v-model="email"
        type="email"
        class="form-control"
        placeholder="Your email"
        @blur="hasErrors = false"
      />
    </div>
    <div class="form-group">
      <input
        v-model="password"
        type="password"
        class="form-control"
        placeholder="Your password"
        @blur="hasErrors = false"
      />
    </div>

    <button class="button is-warning" @click="login">Login</button>
>>>>>>> 1027e923d4141c7cc66e05c391c2830f923145a3
  </section>
</template>

<script>
export default {
  name: "Login",
  head() {
    return {
      title: "Identifícate",
    };
  },
  data() {
    return {
      hasErrors: false,
      errorMessage: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        /* this.validForm() */

<<<<<<< HEAD
       console.log('boton pulsado')

        const credentials = {
          email: this.email,
          password: this.password,
        }
=======
        const response = await this.$api.auth.login(this.email, this.password);
>>>>>>> 1027e923d4141c7cc66e05c391c2830f923145a3

        const token = response.token;

        console.log(token)

        this.$store.dispatch("login", token);

<<<<<<< HEAD
        this.$router.push("/index")
=======
        this.$router.push("/mis-pedidos");
>>>>>>> 1027e923d4141c7cc66e05c391c2830f923145a3
      } catch (error) {
        this.errorMessage = error.message;
        this.hasErrors = true;
      }
    },
    validForm() {
      if (this.email === "") {
        throw new Error("Introduce el email");
      }

      if (this.password === "") {
        throw new Error("Introduce la contraseña");
      }
    },
  },
};
</script>
