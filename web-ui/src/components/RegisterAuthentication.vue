<template>
    <div class="container">
    <body>
        <form id="authentication" @submit.prevent="handleSubmit">
        <h1>Register Authentication</h1>
        <div class="input-field">
            <label for="Code">Code:</label>
            <input type="text" required v-model="Code">
            <div v-if="Error">Error</div>
        </div>

        <button type="submit" class="btn-continue">Submit</button>
    </form>
    </body>
    </div>
    
</template>

<script>
export default {
    data(){
            return {
                Code:'',
                Error:''
            }
        },
        methods: {
            handleSubmit(){               
   
                const options = {method: 'GET'};
                fetch(`https://localhost:443/api/v1/auth/activate-account?token=${this.Code}`, options)
                .then(response => {
                    console.log(response)
                    if(response.error){
                        this.Error = response.error;
                    }
                    else{
                        this.$router.push('./loginpage');
                    }
                })
                
                .catch(err => console.error(err));

                
            }
        }
}
</script>


<style>
.container {
    /* display: flex; */
    justify-content: center;
    align-items: center;
}

body {
    font-family: Arial, sans-serif;
    background-color: #fff;
    margin: 0;
    padding: 0;

}


header h1 {
    margin: 0;
}

form {
    background-color: #fff;
    padding: 30px;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    width: 400px;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
    margin-left: auto;
    margin-right: auto;
}

h1 {
    text-align: center;
    margin-bottom: 20px;
}

.input-field {
    margin-bottom: 20px;    
}

.input-field label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
}

.input-field input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
}

.btn-continue {
    background-color: #000000;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 3px;
    cursor: pointer;
    width: 100%;
    font-size: 16px;
}

.signup-link {
    margin-top: 20px;
    text-align: center;
}

.signup-link a {
    color: #007185;
    text-decoration: none;
}
</style>