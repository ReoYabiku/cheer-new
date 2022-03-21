<template>
    <div class="container">
        <h1 class="message">
            {{this.$route.params['name']}}なら大丈夫！！
        </h1>
        <h1 class="message">
            自分を信じて突き進め！！
        </h1>
        <h1 class="message">
            頑張れ！！！{{this.$route.params['name']}}！！！
        </h1>
    </div>
</template>

<style scoped>
/*メインの情報*/

.explanation{
    text-align: center;
}

.explanation h1{
    padding: 50px 0;
    margin: 0;
}

.explanation p{
    margin: 0;
    color: red;
}

.input-name{
    margin: 30px 100px;
    padding: 20px;
    text-align: center;
    border: 3px solid black;
}

.input-name p{
    font-size: 20px;
}

.name{
    padding: 5px 10px;
}

.input{
    margin-bottom: 30px;
}

.forms{
    display: inline;
}

.btn{
    background-color: rgb(142, 142, 209);
    display: inline-block;
    color: white;
    padding: 3px 6px;
    margin: 0 20px;
    border-radius: 5px;
    text-decoration: none;
    cursor: pointer;
}

.btn:hover{
    background-color: rgb(96, 96, 211);
}

.message{
    font-size: 50px;
    color: red;
    text-align: center;
    margin: 0;
    padding: 30px;
}

</style>