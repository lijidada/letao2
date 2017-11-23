$(function () {


  $form = $('form');
  $form.bootstrapValidator({

    feedbackIcons: {
      //校验成功的图标
      valid: 'glyphicon glyphicon-ok',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    },
    fields: {
      username: {
        validators: {
          notEmpty: {
            message: '用户名不能为空'
          },
          callback:{
            message:'用户名不存在'

          }
        }
      },
      password: {
        validators: {
          notEmpty: {
            message: '密码不能为空'
          },
          stringLength: {
            min: 6,
            max: 12,
            message: '密码长度必须为6到12位'
          },
          callback:{
            message:'密码错误'

          }


        }
      }
    }

  });

  $form.on('success.form.bv',function(e){
    e.preventDefault();

    $.ajax({
      type:'post',
      url:'/employee/employeeLogin',
      data:$form.serialize(),
      success:function(info){
        console.log(info);
        if(info.success){
          location.href='index.html'

        }
        if(info.error ==1000){
          $form.data('bootstrapValidator').updateStatus('username','INVALID','callback');

        }
        if(info.error ==1001){
          $form.data('bootstrapValidator').updateStatus('password','INVALID','callback');


        }

      }


    })

  })




})