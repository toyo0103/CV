$(function(){
    let rows = $('div._6d3hm._mnav9');
    $.each(rows,function(key,row){
        let boxs = $(row).find('._e3il2');
        
        $.each(boxs,function(key,box){
            console.log(box);
            // $(box).on('click',function(){
            //     console.log('click');
            //     // console.log($('._622au._5lms4._4kplh').find('._4rbun')[0].find('img')[0]);
            //     // $('._dcj9f').click();
            //     // console.log('clickEnd');
            // });
            console.log('end');
        });
    });
})