$(function(){
    // let rows = $('div._6d3hm._mnav9');
    // $.each(rows,function(key,row){
    //     let boxs = $(row).find('._e3il2');
        
    //     $(boxs).click(function(){
    //         var img = $(this).find('img')[0];
    //         console.log($(img).prop('alt'));
    //     });

    //     $(boxs).each(function(){
    //         //$(this).click();
    //     });

    //     $(boxs).promise().done(function(){
    //         console.log('123');
    //     });
    // });
})

document.addEventListener("mousedown",function(event){
    //right click
    if(event.button == 2){
        console.log($(this));
        console.log($(this).parents('pre.default.prettyprint.prettyprinted'));
        if($(this).parent('.default.prettyprint.prettyprinted').length !==0){
            console.log('has');
        }
    }
});

// document.addEventListener("mousedown", function(event){
//     console.log(event.fromElement);
//     //right click
//     if(event.button == 2) { 
//         //clickedEl = event.target;
//     }
// }, true);

function CrawThisPost()
{
    console.log('CrawThisPost');
}