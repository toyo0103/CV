var rightClickFocusPost = null;
const articleLookLike = 'div[role="article"]';

$(document).on('mousedown',articleLookLike,function(e){
    if(e.button === 2){
        //Right Click
        rightClickFocusPost = $(this);
    }
});

$(function(){

})

function CrawThisPost()
{
    if(rightClickFocusPost !== null){
        console.log(rightClickFocusPost);
    }else{
        alert('非Facebook貼文!!')
    }
}