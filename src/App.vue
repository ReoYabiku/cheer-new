<template>
  <body>
    <header>
      <div class="container">
          <div class="header-title">応援サイト</div>
      </div>
      <div class="clear"></div>
    </header>

    <router-view/>

    <footer>
        <div class="container">
            <div class="footer-title">
                <h1>フィーバータイム第一週</h1>
            </div>
        </div>
    </footer>
  </body>
</template>

<style>
body{
  margin: 0;
  padding: 0;
  font-family: "Hiragino Kaku Gothic ProN";
  background-color: bisque;
}

.container{
    padding: 0 30px;
}

.clear{
    clear: left;
}

/*ヘッダの情報*/

header{
    font-size: 20px;
    background-color: rgb(110, 156, 224);
    padding: 0;
    height: 50px;
}

.header-title{
    float: left;
    padding: 10px 0;
}

/*フッタの情報*/

footer{
    background-color: rgb(110, 156, 224);
}

.footer-title h1{
    margin: 0;
    padding: 40px 0;
}
</style>
