$(function () {
    //监控窗口的宽度改变

    $(window).on('resize',function () {
        let clientW = $(window).width();
        let imgShow = clientW >800;
        $("#lk_carousel .item").each(function (index,item) {
            //判断屏幕宽度是大是小
            let src = imgShow ? $(item).data('lg-img'):$(item).data('sm-img');
            let imgUrl = 'url("'+ src+'")';

            //设置背景
            $(item).css({
                backgroundImage:imgUrl
            });

            if (!imgShow){
                $(item).empty().append($("<img src='" + src + "'>"))
            }else{
                //清空item里的元素
                $(item).empty();
            }
        })
    });
    //默认触发一下window的resize事件
    $(window).trigger('resize');
    //
    //工具提示
    $('[data-toggle="tooltip"]').tooltip()

    //滚动网页
    $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');

    $('#lk_header .nav a').on('click',function () {
        let dyid = $(this).attr('name');
        dyid && $body.animate({scrollTop:$("#"+dyid).get(0).offsetTop},500)
    })
});