$(function(){
    let rows = $('div._6d3hm._mnav9');
    $.each(rows,function(key,row){
        let boxs = $(row).find('._e3il2');
        
        $(boxs).click(function(){
            var img = $(this).find('img')[0];
            console.log($(img).prop('alt'));
        });

        $(boxs).each(function(){
            //$(this).click();
        });

        $(boxs).promise().done(function(){
            console.log('123');
        });
    });
})