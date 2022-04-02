<template>
<div>
    <div class="carousel relative">
        <div class="cont">
        <div class="inner_content flex">
            <div class="slide w-full">
                <img class="w-full" src="../assets/21.jpg" alt="" />
            </div>
            <div class="slide w-full">
                <img class="w-full" src="../assets/22.jpg" alt="" />
            </div>
            <div class="slide w-full">
                <img class="w-full" src="../assets/23.jpg" alt="" />
            </div>
        </div>
        </div>
        <div class="white_cont"></div>
        <div class="white_cont2"></div>
        <p class="arrow_first"><i class="fa-solid fa-left"></i></p>
        <p class="arrow_second"><i class="fa-solid fa-right"></i></p>
    </div>
</div>
</template>

<script>
import $ from 'jquery'
export default{
    mounted(){
        var slide = 0;
        $('.arrow_first').on('click', function(){
            if(slide==0){
                $('inner_content').css({"t  ransform":"translateX(-33.33333%)"})
                slide=2;
            }else if(slide==1){
                $('inner_content').css({"transform":"translateX(0)"})
                slide=0;
            }else if(slide==2){
                $('inner_content').css({"transform":"translateX(-66.66666%)"})
                slide=1;
            }
        });
    }
}
</script>

<style lang="less" scoped>
*{
    transition: all 1sec;
}
    .cont{
        width: 70%;
        margin: auto;
        .inner_content{
            width: 300%;

        }
    }
    body{
        overflow-x: hidden;
    }
    .white_cont{
        position: absolute;
        width: 15%;
        background: #fff;
        height: 100%;
        top: 0;
        right: 0;
        z-index: 10;
    }

    .arrow_first{
        position: absolute;
        left: 2em;
        top: 50%;
        transform: translateY(-50%);
        font-size: 60px;
        z-index: 15;
        cursor: pointer;
    }
        .arrow_second{
        position: absolute;
        right: 2em;
        top: 50%;
        transform: translateY(-50%);
        font-size: 60px;
        z-index: 15;
        cursor: pointer;
    }
</style>