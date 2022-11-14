<template>
  <div>
    <h1>게시글 작성</h1>
    <form @submit.prevent="createArticle">
        <div>
            <input type="text" v-model.trim="title">
        </div>
        <textarea v-model.trim="content" id="content" cols="30" rows="10"></textarea>
        <div></div>
        <input type="submit" value="만들기">
    </form>
  </div>
</template>

<script>
export default {
    name:'CreateView',
    data(){
        return{
            title:"",
            content:""
        }
    },
    methods:{
        createArticle(){
            const title = this.title
            const content = this.content
            if (!title){
                alert('제목을 입력해주세요')
            } else if(!content){
                alert('내용을 입력해주세요')
            } else{
                const payload = {
                    id: this.$store.state.article_id,
                    title, content
                }
                this.$store.dispatch('createArticle', payload)
                this.$router.push({ name:'IndexView' })
            }
        }
    }
}
</script>

<style>

</style>