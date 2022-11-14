<template>
  <div>
    <h1>DETAIL</h1>
    <p>{{ article?.id }}</p>
    <p>{{ article?.title }}</p>
    <p>{{ article?.content }}</p>
  </div>
</template>

<script>
export default {
    name: 'DetailView',
    data(){
        return{
            article:null
        }
    },
    computed:{
        articles(){
            return this.$store.state.articles
        }
    },
    methods:{
        getArticleById(id){
            // const id = this.$route.params.id
            for (const article of this.articles){
                if (article.id === Number(id)){
                    this.article = article
                    break
                }
            }
        }
    },
    created(){
        this.getArticleById(this.$route.params.id)
    }
}
</script>

<style>

</style>