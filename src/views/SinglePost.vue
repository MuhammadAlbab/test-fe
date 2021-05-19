<template>
  <div>
    <b-container>
      <h6>
        Single Post
      </h6>
      <div class="wrapper">
        <b-form-input 
          v-model="searchText" 
          placeholder="Masukan ID Post"
          type="number"
          @keydown.enter="handleSearch(searchText)">
          </b-form-input>
        <b-button @click="handleSearch(searchText)" class="btnSearch">
          <b-icon icon="search"></b-icon>
        </b-button>
      </div>

      <template v-if="searchLoading == true">
      <b-row align-h="center">
        <b-spinner 
            style="width: 3rem; height: 3rem;" 
            class="mb-3 mt-3"
        >
        </b-spinner>
      </b-row>
      </template>
      <template v-if="post.length !== 0">
        <section class="mt-3 mb-3">
          <b-row align-h="center">
            <h2> Hasil Pencarian</h2>
          </b-row>
        </section>
        <section>
          <b-card 
            class="post-card"
          >
            <b-card-title>
              {{post.title}}
            </b-card-title>
            <b-card-text>
              {{post.body}}
            </b-card-text>
            <b-card-text>
              Id: {{post.id}} 
              <br>
              userId: {{post.userId}}
            </b-card-text>
            <b-button @click="handleComment(post.id)">Comments...</b-button>
          </b-card>
        </section>
      </template>
    </b-container>
  </div>
</template>

<script>
import {mapState, mapActions } from 'vuex'
export default {
  name: 'SinglePost',
  data(){
    return {
      searchText: '',
      searchLoading: false,
    }
  },
  computed:{
    ...mapState(['post'])
  },
  methods: {
    ...mapActions(['getPost', 'getComment']),
    async handleSearch(id){
      this.searchLoading = !this.searchLoading
      await this.getPost(id) 
      this.searchLoading = !this.searchLoading
    },
    async handleComment(id){
      await this.getComment(id)
      this.$router.push(`/comment/${id}`)
    }
  },
}
</script>

<style scoped>
  h6 {
    text-align: center;
  }

  h2 {
    text-align: center;
  }

  .post-card{
    margin: 5px;
  }

  .btnSearch {
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
  }

  .wrapper{
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }
</style>