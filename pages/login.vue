<template>
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

        const response = await this.$api.auth.login(this.email, this.password);

        const token = response.token;

        console.log(token)

        this.$store.dispatch("login", token);

        this.$router.push("/");
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
