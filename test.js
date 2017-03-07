$(document).ready(function(){
  $(document).ajaxStart(function(){
        $("#user-image").attr("src","search.gif");
      }).ajaxStop(function(){
        console.log("Ajax Stopped.")
      }).ajaxSuccess(function(){
        console.log("Ajax Success")
      }).ajaxComplete(function(){
        console.log("Ajax Completed")
      })

      $("#get-data").on("click",function(){
        
        $.ajax({
          url:"https://public-api.wordpress.com/rest/v1/sites/dotnetask.wordpress.com",
          success: function(data){
            //$("#user-image").attr("src",data.avatar_url);
            $("#address").text(data.name);
            $("#phone").text(data.ID)
            $("#email-ID").text(data.description)
          },
          error: function(){
            $("#user-image").attr("src","no-user.png");
            $("#address").text("User not found");
            $("#phone").text("User not found");
            $("#email-ID").text("User not found");
          }
        })
      })
    });
