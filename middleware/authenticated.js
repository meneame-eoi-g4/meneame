export default ({ store, redirect }) => {

    // retrieving keys via object destructuring
    const isAuth = store.getters.isAuth
    console.info("Identificado:", isAuth)
    if (!isAuth) {
      return redirect('/login')
    }
  }
