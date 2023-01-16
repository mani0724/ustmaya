jQuery(document).ready(function(){
    //   insert back to top button dynamicly
     $( "#backToTop" ).append('<a class="backToTop" href="javascript:void(null);" style="display: none;"><i class="fa fa-angle-up"></i><iframe id="tmp_downloadhelper_iframe" style="display: none;"></iframe></a>');
      var $window = $(window);
      var distance = 80;
        // scroll
      $window.scroll(function() {
        // header
        if($window.scrollTop() >= distance) {
          $(".backToTop").fadeIn();
        }else{
          $(".backToTop").fadeOut();
        }
      });
      
      $('.backToTop').click(function() {
        $('html, body').animate({
                scrollTop: 0
            }, 900);
     });
    });



var currentTab = 0;
              document.addEventListener("DOMContentLoaded", function(event) {


              showTab(currentTab);

              });

              function showTab(n) {
              var x = document.getElementsByClassName("tab");
              x[n].style.display = "block";
              if (n == 0) {
              document.getElementById("Btn").style.display = "none";
              } else {
              document.getElementById("Btn").style.display = "inline";
              }
              if (n == (x.length - 1)) {
              document.getElementById("Btn").innerHTML = '<i class="Submit"></i>';
              } else {
              document.getElementById("Btn").innerHTML = '<i class="Submit"></i>';
              }
              fixStepIndicator(n)
              }

              function nextPrev(n) {
              var x = document.getElementsByClassName("tab");
              if (n == 1 && !validateForm()) return false;
              x[currentTab].style.display = "none";
              currentTab = currentTab + n;
              if (currentTab >= x.length) {
            
              document.getElementById("nextprevious").style.display = "none";
              document.getElementById("all-steps").style.display = "none";
              document.getElementById("register").style.display = "none";
              document.getElementById("text-message").style.display = "block";




              }
              showTab(currentTab);
              }

              function validateForm() {
                   var x, y, i, valid = true;
                   x = document.getElementsByClassName("tab");
                   y = x[currentTab].getElementsByTagName("input");
                   for (i = 0; i < y.length; i++) {
                       if (y[i].value == "") {
                           y[i].className += " invalid";
                           valid = false;
                       }


                   }
                   if (valid) {
                       document.getElementsByClassName("step")[currentTab].className += " finish";
                   }
                   return valid;
               }

               function fixStepIndicator(n) {
                   var i, x = document.getElementsByClassName("step");
                   for (i = 0; i < x.length; i++) {
                       x[i].className = x[i].className.replace(" active", "");
                   }
                   x[n].className += " active";
               }
//*google maps**//
               function myMap() {
                var mapProp= {
                    center:new google.maps.LatLng(12.9716,77.5946),
                    zoom:18,
                };
                var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
                }

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");


    if (dots.style.display === "none") {
        dots.style.display = "flex";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "flex";
    }
    }
    function myFunction1() {
        var dots1 = document.getElementById("dots1");
        var moreText = document.getElementById("more1");
        var btnText = document.getElementById("myBtn1");
    
    
        if (dots.style.display === "none") {
            dots.style.display = "flex";
            btnText.innerHTML = "Read more";
            moreText.style.display = "none";
        } else {
            dots.style.display = "none";
            btnText.innerHTML = "Read less";
            moreText.style.display = "flex";
        }
        }

        function myFunction2() {
            var dots2 = document.getElementById("dots2");
            var moreText = document.getElementById("more2");
            var btnText = document.getElementById("myBtn2");
        
        
            if (dots.style.display === "none") {
                dots.style.display = "flex";
                btnText.innerHTML = "Read more";
                moreText.style.display = "none";
            } else {
                dots.style.display = "none";
                btnText.innerHTML = "Read less";
                moreText.style.display = "flex";
            }
            }
    
            function myFunction3() {
                var dots3 = document.getElementById("dots3");
                var moreText = document.getElementById("more3");
                var btnText = document.getElementById("myBtn3");
            
            
                if (dots.style.display === "none") {
                    dots.style.display = "flex";
                    btnText.innerHTML = "Read more";
                    moreText.style.display = "none";
                } else {
                    dots.style.display = "none";
                    btnText.innerHTML = "Read less";
                    moreText.style.display = "flex";
                }
                }
                
                function myFunction4() {
                    var dots4 = document.getElementById("dots4");
                    var moreText = document.getElementById("more4");
                    var btnText = document.getElementById("myBtn4");
                
                
                    if (dots.style.display === "none") {
                        dots.style.display = "flex";
                        btnText.innerHTML = "Read more";
                        moreText.style.display = "none";
                    } else {
                        dots.style.display = "none";
                        btnText.innerHTML = "Read less";
                        moreText.style.display = "flex";
                    }
                    }   
                    function myFunction5() {
                        var dots4 = document.getElementById("dots5");
                        var moreText = document.getElementById("more5");
                        var btnText = document.getElementById("myBtn5");
                    
                    
                        if (dots.style.display === "none") {
                            dots.style.display = "flex";
                            btnText.innerHTML = "Read more";
                            moreText.style.display = "none";
                        } else {
                            dots.style.display = "none";
                            btnText.innerHTML = "Read less";
                            moreText.style.display = "flex";
                        }
                        }   
                        function myFunction6() {
                            var dots4 = document.getElementById("dots6");
                            var moreText = document.getElementById("more6");
                            var btnText = document.getElementById("myBtn6");
                        
                        
                            if (dots.style.display === "none") {
                                dots.style.display = "flex";
                                btnText.innerHTML = "Read more";
                                moreText.style.display = "none";
                            } else {
                                dots.style.display = "none";
                                btnText.innerHTML = "Read less";
                                moreText.style.display = "flex";
                            }
                            }   
                            function myFunction7() {
                                var dots4 = document.getElementById("dots7");
                                var moreText = document.getElementById("more7");
                                var btnText = document.getElementById("myBtn7");
                            
                            
                                if (dots.style.display === "none") {
                                    dots.style.display = "flex";
                                    btnText.innerHTML = "Read more";
                                    moreText.style.display = "none";
                                } else {
                                    dots.style.display = "none";
                                    btnText.innerHTML = "Read less";
                                    moreText.style.display = "flex";
                                }
                                }  
                                
                                function myFunction8() {
                                var dots4 = document.getElementById("dots8");
                                var moreText = document.getElementById("more8");
                                var btnText = document.getElementById("myBtn8");
                            
                            
                                if (dots.style.display === "none") {
                                    dots.style.display = "flex";
                                    btnText.innerHTML = "Read more";
                                    moreText.style.display = "none";
                                } else {
                                    dots.style.display = "none";
                                    btnText.innerHTML = "Read less";
                                    moreText.style.display = "flex";
                                }
                                }  
                                
                                
      
     
                        
                
    
