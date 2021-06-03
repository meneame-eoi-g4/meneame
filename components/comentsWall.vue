<template>
 <div class="container-wrap">
      <div class="columns is-gapless is-flex is-multiline">
        <comentitem
          v-for="item in coments"
          :value="item"
          :key="item._id"
        />
      </div>
      <textarea v-model="content" class="textarea" placeholder="comenta"></textarea>
      <button class="button is-warning" @click="coment">coment</button>
    </div>
</template>
<script>
import comentItem from "@/components/partials/comentitem";



export default {
  name: "mainWall",
  components: {
    comentItem
    
    
  },
   data() {
    return {
      content: "",
     
    };
   },
  props: {
    comments: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  computed: {
   
      currentUser() {
      return this.$store.getters.currentUser
    },
  },
  methods: {
      async coment(){
          try{
              const newComent={
                  author: {
                      name: this.currentUser.firstname ,
                      img: this.currentUser.avatar|| 'https://img2.freepng.es/20180616/sxr/kisspng-avatar-computer-icons-avatar-icon-5b254abb7cf344.7556131215291706195118.jpg'
                  },
                  content: this.content
              }

          }catch(error){

          }
      }
  },
};
</script>