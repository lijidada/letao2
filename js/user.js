$(function(){


  var currentPage =1;
  var pageSize =5;

  function render(){

    $.ajax({
      type:'get',
      url:'/category/queryTopCategoryPaging',
      data:{
        page:currentPage,
        pageSize:pageSize
      },
      success:function(info){
        console.log(info);
        $('tbody').html(template('user_tmp',info));
  
        $('#paginator').bootstrapPaginator({
          bootstrapMajorVersion:3,
          currentPage:currentPage,
          totalPages:Math.ceil(info.total/pageSize),
          onPageClicked:function(a,b,c,page){
            currentPage=page;
            render();
  
  
          }
        })
  
      }
    })
    
  }
  render();

  $('tbody').on('click','.btn',function(){

    $('#modal_disable').modal('show');

    var id = $(this).parent().data('id');
    var isDelete = $(this).hasClass('btn-danger')?0:1

    $('.btn_disable').off().on('click',function(){


  
      $.ajax({
        type:"post",
        url:'/user/updateUser',
        data:{
          id:id,
          isDelete:isDelete
        },
        success:function(info){
          if(info.success){
            $('#modal_disable').modal('hide');
            render();
  
  
          }
  
        }
      })

    })

    
  })



})