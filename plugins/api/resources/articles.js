class Article{
    constructor(axios){
        this.axios = axios
    }

    async list(){
        try {
            const response = await this.axios.get("Articles");

            return response.data
        }catch(error){
            throw error
        }
    }

    async send(ArticleData){
        try {
            const response = await this.axios.post("Articles", ArticleData)

            return response.data
        }catch(error){
            throw error
        }
    }
}

export default Article
