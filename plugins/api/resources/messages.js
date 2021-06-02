class Message{
    constructor(axios){
        this.axios = axios
    }

    async send(messageData){
        try {
            const response = await this.axios.post("messages", messageData)

            return response.data
        }catch(error){
            throw error
        }
    }
}

export default Message
