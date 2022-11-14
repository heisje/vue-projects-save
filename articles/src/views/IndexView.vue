<template>
  <div>
    <h3>INDEX</h3>
    <div v-for="(value, index) in articles" :key="index" @click="goDetail(value.id)">
        <ArticleItem :article="value" />
    </div>
  </div>
</template>

<script>
import ArticleItem from '@/components/ArticleItem.vue'
export default {
    name:'IndexView',
    components:{
        ArticleItem
    },
    computed:{
        articles(){
            return this.$store.state.articles
        },
        
    },
    methods:{
        goDetail(id){
            this.$router.push({ name:"detail", params:{id} })
        }
    }
}
</script>

<style>

</style>