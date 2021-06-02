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
