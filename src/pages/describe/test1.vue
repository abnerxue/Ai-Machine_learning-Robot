<!--
 * @Description: 
 * @Version: 2.0.1.003
 * @Author: 薛松田
 * @Date: 2019-10-15 09:58:31
 * @LastEditors: 薛松田
 * @LastEditTime: 2019-10-15 18:27:14
 -->
<template>
<div class="masked" style="height:100%;background:no-repeat url('../../../static/img/aibanner1.jpg');">
    <h4 style="margin-top:100px;position:absolute;">如何更改滚动字幕的字体颜色和字体大小</h4>
 
</div>

 </template>
  <style>
   .masked h4 {
        background:url('../../../static/img/aibanner1.jpg');
       
        font-size:28px;
    text-align: center;
    /* background-image: -webkit-linear-gradient(left, #2d8cf0, #fff 25%, #2d8cf0 50%, #fff 75%, #2d8cf0); */
    background-image: -webkit-linear-gradient(left, #2d8cf0 50%, rgb(230, 11, 11) );
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-background-size: 200% 100%;
    /* -webkit-animation: masked-animation 5s infinite linear; */
    -webkit-animation: masked-animation 5s 1 linear;
}

@-webkit-keyframes masked-animation {
    0% {
        background-position: 0 0;
    }

    100% {
        background-position: -100% 0;
    }
}
</style>