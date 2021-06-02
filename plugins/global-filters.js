import Vue from 'vue'

Vue.filter("toMoney", (money) => {
  return money.toLocaleString("es-ES", { style: "currency", currency: "EUR"})
})
