<template>
    <div>
        <h1>Space invaders</h1>
        <div class="ship w-20">
            <img src="../assets/spaceship.png" alt="">
        </div>
        <!-- <button class="Top">Top</button>
        <button class="Bottom">Bottom</button>
        <button class="Right">Right</button>
        <button class="Left">Left</button> -->
<div class="gun">

</div>
    </div>
    
</template>
<script> 
import $ from 'jquery'
export default{
    mounted(){
        $(document).ready(function(){
            var posX = 0;
            var posY = 0;

            window.addEventListener('keydown', function(e){
                if(e.keyCode == 65){
                    posX -= 15;
                    $('.ship').css('left', posX);                
                    $('.ship').addClass('left');
                }else if(e.keyCode == 68){
                    posX += 15;
                    $('.ship').css('left', posX);
                    $('.ship').addClass('right');
                }else if(e.keyCode == 87){
                    posY -= 15;
                    $('.ship').css('top', posY);
                    $('.ship').addClass('top');
                }else if(e.keyCode == 83){
                    posY += 15;
                    $('.ship').css('top', posY);
                    $('.ship').addClass('bottom');
                }else if(e.keyCode == 82){
                    posY=0;
                    posX=0;
                    $('.ship').css('left', posX);
                    $('.ship').css('top', posY);
                }
            })
            window.addEventListener('keyup', function(e){
                $('.ship').removeClass('top left right bottom')
            })
        });
    }
}




</script>
<style lang="less">

    .ship{
        transition: all 0.3s;
        position: absolute;
        &.left{
            transform: rotate(-90deg);
        }
        &.right{
            transform: rotate(90deg);
        }
        &.top{
            transform: rotate(0deg);
        }
        &.bottom{
            transform: rotate(180deg);
        }
    }

</style>