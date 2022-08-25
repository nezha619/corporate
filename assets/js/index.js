
$(document).ready(function(){
  $("#clickHandler").click(function(){
    $("#ans1").slideToggle("slow")
  });
});

$(document).ready(function(){
  $("#clickHandler2").click(function(){
    $("#ans2").slideToggle("slow")
  });
});

$(document).ready(function(){
  $("#clickHandler3").click(function(){
    $("#ans3").slideToggle("slow")
  });
});

$(document).ready(function(){
  $("#clickHandler4").click(function(){
    $("#ans4").slideToggle("slow")
  });
});

$(document).ready(function(){
  $("#clickHandler5").click(function(){
    $("#ans5").slideToggle("slow")
  });
});

$(document).ready(function(){
  $("#clickHandler6").click(function(){
    $("#ans6").slideToggle("slow")
  });
});


$(document).ready(function(){
  $('input[type="checkbox"]').click(function(){
    if($(this).is(":checked")){
      $(".yearly-card").slideDown("slow");
      $(".monthly-card").slideUp("slow");
      
    }
    else if($(this).is(":not(:checked)")){
      $(".monthly-card").slideDown("slow");
      $(".yearly-card").slideUp("slow");
    }
  });
});