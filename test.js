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
        var username = $("#name").val();
        $.ajax({
          url:"https://public-api.wordpress.com/rest/v1/sites/25262138/posts/"+username,
          success: function(data){
            $("#user-image").attr("src",data.avatar_url);
            $("#address").text(data.nice_name);
            $("#phone").text(data.login)
            $("#email-ID").text(data.email)
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
