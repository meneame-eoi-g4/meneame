<template>
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
           
  </section>
</template>

<script>
export default {
  name: "Login",
  head(){
    return {
      title: 'Identifícate'
    }
  },
  data() {
    return {
      hasErrors: false,
      errorMessage: '',
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {

       console.log('boton pulsado')

        const credentials = {
          email: this.email,
          password: this.password,
        }

        const response = await this.$api.auth.login(this.email, this.password)

        const token = response.token

        this.$store.dispatch('login', token)

        this.$router.push("/index")
      } catch (error) {
        this.errorMessage = error.message
        this.hasErrors = true
      }
    },
    validForm(){
      if(this.email === ''){
        throw new Error('Introduce el email')
      }

      if(this.password === ''){
        throw new Error('Introduce la contraseña')
      }
    }
  },
};
</script>
