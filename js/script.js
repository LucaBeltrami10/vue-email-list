const {createApp} = Vue;

createApp({
    data() {
        return {
            randomEmail : [],

        }
    },

    methods: {
    createXEmailInArray(numberOfEmail){
        for(let i = 0; i< numberOfEmail; i++ ){
            this.randomEmail.push( axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) =>  randomEmail = response.data.response) )
        }

    }

    },

    created(){
        
        
    }
}) .mount('#app');