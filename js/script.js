const {createApp} = Vue;

createApp({
    data() {
        return {
            randomEmail : [],

        }
    },

    methods: {
    createXEmailInArray(){
        for(let i = 0; i< 10; i++ ){
            this.randomEmail.push( axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) =>  randomEmail = response.data.response) )
        }

    }

    },

    created(){
        this.createXEmailInArray(),
        console.log(this.randomEmail)
        
    }
}) .mount('#app');