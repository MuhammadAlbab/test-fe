<template>
  <div>
      <b-container>
          <b-card 
            v-for="item in comment" 
            :key="item.id"
            class="post-card"
            >
            <b-card-title>
                {{item.name}}
            </b-card-title>
            <b-card-text>
                {{item.body}}
            </b-card-text>
            <b-card-text>
                Post Id: {{item.postId}} 
                <br>
                Comment Id: {{item.id}} 
                <br>
                email: {{item.email}}
            </b-card-text>
            </b-card>
      </b-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'Comment',
    computed: {
        ...mapState(['comment'])
    }
}
</script>

<style>

</style>