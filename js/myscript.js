var rightClickFocusPost = null;
const articleLookLike = 'div[role="article"]';

$(document).on('mousedown',articleLookLike,function(e){
    if(e.button === 2){
        //Right Click
        rightClickFocusPost = $(this)[0];
    }
});

$(function(){

})

function CrawThisPost()
{
    if(rightClickFocusPost !== null){    
        console.log(rightClickFocusPost);
        let content = $(rightClickFocusPost).find('.userContentWrapper .usercontent');
        console.log(content.length);
        console.log(content.innerText);
    }else{
        alert('非Facebook貼文!!')
    }
}