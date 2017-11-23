$(function(){

  $(document).ajaxStart(function(){
    NProgress.start();
  })

  $(document).ajaxStop(function(){
    NProgress.done();
  })

  if(location.href.indexOf('login.html')==-1){
    $.ajax({
      type:'get',
      url:'/employee/checkRootLogin',
      success:function(info){
        if(info.error ==400){
          location.href="login.html"

        }

      }
    })

  }


  $('.category_next').prev().on('click',function(){
    $(this).next().stop().slideToggle();
  })

  $('.icon_left').on('click',function(){
    $('#aslide-left').toggleClass('active');
    $('#content-right').toggleClass('active');
  })

  $('.icon_right').on('click',function(){
    $('#modal_logout').modal('show');

    $('.btn_logout').off().on('click',function(){
      $.ajax({
        type:'get',
        url:'/employee/employeeLogout',
        success:function(info){
          if(info.success){
            location.href="login.html"

          }

        }
      })
    })
  })



  
})