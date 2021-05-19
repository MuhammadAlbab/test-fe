<template>
<div class="home">
  <b-container>
    <h6>
      Semua Post
    </h6>
    <b-card 
      v-for="item in posts" 
      :key="item.id"
      class="post-card"
    >
      <b-card-title>
        {{item.title}}
      </b-card-title>
      <b-card-text>
        {{item.body}}
      </b-card-text>
      <b-card-text>
        Id: {{item.id}} 
        <br>
        userId: {{item.userId}}
      </b-card-text>
      <b-button @click="handleComment(item.id)">Commments...</b-button>
    </b-card>
  </b-container>
</div>
</template>

<script>
import {mapState, mapActions } from 'vuex'
export default {
  name: 'Home',
  computed: {
    ...mapState(['posts', 'post'])
  },
  methods: {
    ...mapActions(['getPosts', 'getPost', 'getComment']),

    async handleComment(id){
      await this.getComment(id)
      this.$router.push(`/comment/${id}`)
    }
  },
  async created(){
    await this.getPosts()
  }
}
</script>

<style scoped>

  .post-card{
    margin: 5px;
  }

  h6 {
    text-align: center;
  }

</style>
