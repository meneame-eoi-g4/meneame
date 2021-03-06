class Article{
    constructor(axios){
        this.axios = axios
    }

    async list(){
        try {

            const response = await this.axios.get("articles");
            console.log(response)

            return response.data
        }catch(error){
            throw error
        }
    }
    async like(article){
        try {

            const response = await this.axios.put(`articles/${article._id}`,article);
            return response.data
        } catch (error) {

        }

    }
    async coment(coment){
        try {
            console.log(coment)
            const response = await this.axios.put(`articles/${coment._id}`,coment);
            return response.data
        } catch (error) {

        }

    }
    async dislike(article){
        try {
            const response = await this.axios.put(`articles/${article._id}`, article);
            return response.data

        } catch (error) {

        }

    }

    async send(ArticleData){
        try {
            const response = await this.axios.post("articles", ArticleData)

            return response.data
        }catch(error){
            throw error
        }
    }
}

export default Article
