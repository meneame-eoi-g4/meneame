import axios from 'axios'
import Auth from './resources/auth'
import Article from './resources/articles'
import Register from './resources/register'
import Messages from './resources/messages'
export default (context, inject) => {
axios.defaults.baseURL = context.env.baseURL

  inject('api', {
    messages: new Messages(axios),
    auth: new Auth(axios),
    articles: new Article(axios),
    register : new Register(axios),
    initSession(token = null){
      if(token){
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      }
    },
    closeSession(){
      axios.defaults.headers.common['Authorization'] = ''
    }
  })
}
