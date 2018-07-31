$(document).ready(function(){
    
    


//   if($(".q").length>152){
//       alert("ss");
//    
//    $(this).css("overflow-y" , "hidden")
//       
//   }
    
//     $( "#aa" ).each(function( ) {
//    
//         console.log(1);
//        
//
//   var res = document.getElementById("aa").innerHTML.substring(0, 100);
//           console.log(res);
//    document.getElementById("aa").innerHTML = res + '...';
//         document.getElementById("aa").innerHTML.length= 50;
//                    console.log(document.getElementById("aa").innerHTML.length);
//
//     });


//        var res =document.getElementById("demoo").innerHTML.substring(0,4);
//    document.getElementById("demoo").innerHTML = res;
//
   // function countLines() {
//  var divHeight = document.getElementById('aa').offsetHeight;
//  var lineHeight = parseInt(document.getElementById('aa').style.lineHeight);
//  var lines = divHeight / lineHeight;
//  alert( parseInt(document.getElementById('aa').style.getPropertyValue("line-height")));

      
        $(".ss").closest(".ibox").mouseenter(function(){
   
            
            
            if(($(this).find("#aa")).text().length>152){
            
        
// $(this).find(".product-imitation").css("display", "none");
 $(this).find(".product-imitation").fadeOut( 200);
 $(this).find(".product-price").fadeOut( 200);

    ($(this).find("#aa")).css("height", " auto");
    ($(this).find("#aa")).css("line-height", "23px");
    ($(this).find("#aa")).css("overflow-y", "scroll");
    
               

              
           }
  
});
        
          $(".ss").closest(".ibox").mouseleave(function(){
            if(($(this).find(".ss")).text().length>152){
        
         
           
 $(this).find(".product-imitation").fadeIn( 200);
 $(this).find(".product-price").fadeIn( 200);

    ($(this).find("#aa")).css("height", " 3em");
    ($(this).find("#aa")).css("line-height", "16px");
    ($(this).find("#aa")).css("overflow-y", "hidden");

           
     }
        
        
});

  
        
    
    
    
});



