const {createApp} = Vue;

createApp({
    data() {
        return {
            randomEmail : '',

        }
    },

    methods: {

    },

    created(){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => console.log(response) )
        
    }
}) .mount('#app');