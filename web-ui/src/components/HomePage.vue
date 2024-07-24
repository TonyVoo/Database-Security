<script>
   

</script>


<template>
    <div class="container">
        <div
            v-for="box in boxes"
            :key="box.id"
            :id="box.id"
            class="box"
            @click="redirect(box.id)"
        >
            {{ box.id }}
        </div>
        <button @click="hello()">click me</button>
        <div>{{Email}}</div>
    </div>
</template>

<script>
    export default{
        data(){
        return {
                Email: 'hello',
            }
        }
    }
    

</script>


<style>
    .box{
        width: 100px; /* Adjust the width as needed */
        height: 100px; /* Adjust the height as needed */
        margin: 20px;
        background-color: #4CAF50;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 18px;
    }
    .container {
        display: flex;
        flex-wrap: wrap;

    }
</style>