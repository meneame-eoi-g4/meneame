<template>
  <div>
    <div class="form-group">
      <input
        v-model="firstname"
        type="text"
        class="form-control"
        placeholder="Pon tu nombre"
        @blur="hasErrors = false"
      />
    </div>
    <div class="form-group">
      <input
        v-model="lastname"
        type="text"
        class="form-control"
        placeholder="Pon tu apellido"
        @blur="hasErrors = false"
      />
    </div>

    <div class="form-group">
      <input
        v-model="email"
        type="email"
        class="form-control"
        placeholder="pon tu email"
        @blur="hasErrors = false"
      />
    </div>
    <div class="form-group">
      <input
        v-model="password"
        type="password"
        class="form-control"
        placeholder="Password"
        autocomplete="disabled"
      />
    </div>
    <div class="form-group">
      <label class="checkbox">
        <input type="checkbox" v-model="legalAcceptance" />
        Acepto los términos y condiciones legales
      </label>
    </div>
    <button class="button is-warning" @click="login">Registrate</button>
  </div>
</template>

<script>
export default {
  name: "RegisterPage",

  head() {
    return {
      title: "Regístrate",
    };
  },

  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      legalAcceptance: false, //desmarcado por defecto (por ley)
    };
  },
  methods: {
    async login() {
      try {
        const newUser = {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          password: this.password,
          avatar:
            "https://img2.freepng.es/20180616/sxr/kisspng-avatar-computer-icons-avatar-icon-5b254abb7cf344.7556131215291706195118.jpg",
        };
        /* validForm(); */
        console.log(newUser);
        await this.$api.register.register(newUser);

        this.$router.push("/bienvenido");
      } catch (error) {
        this.errorMessage = error.message;
        this.hasErrors = true;
      }
    },
    validForm() {
      if (this.firstname === "") {
        throw new Error("Introduce el nombre");
      }
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
