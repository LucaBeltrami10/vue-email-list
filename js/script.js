const {createApp} = Vue;

createApp({
    data() {
        return {
            randomEmail : [],

        }
    },

    methods: {
    createEmailInArray(){
        for(let i = 0; i< 10; i++ ){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) =>{
                console.log(response)
                return this.randomEmail.push(response.data.response)
            })
            
        }
        console.log(this.randomEmail)
    }

    },

    created(){
        this.createEmailInArray()
    }
}) .mount('#app');