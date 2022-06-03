// JavaScript Document

$(document).ready(function(){
  $("#navopt").click(function(){
	   console.log("ok");
    $(".part_1").toggleClass("mynav mynav hoverme");
	//$(".myslidemenu").toggleClass("has-sub");
	$(".menu-list").hover(function(){
		$(".part_1").toggleClass("mynav mynav hoverme");
	})
	
  });
}); 



( function( $ ) {
$( document ).ready(function() {
	
$('.mynav ul > li.has-sub > a').on('click', function(){
		$(this).removeAttr('href');
		var element = $(this).parent('li');
		if (element.hasClass('open')) {
			element.removeClass('open');
			element.find('li').removeClass('open');
			element.find('ul').slideUp();
		}
		else {
			element.addClass('open');
			element.children('ul').slideDown();
			element.siblings('li').children('ul').slideUp();
			element.siblings('li').removeClass('open');
			element.siblings('li').find('li').removeClass('open');
			element.siblings('li').find('ul').slideUp();
		}
	});

	$('ul > li.has-sub > a').append('<span class="holder"></span>');

	(function getColor() {
		var r, g, b;
		var textColor = $('.mynav ').css('color');
		textColor = textColor.slice(4);
		r = textColor.slice(0, textColor.indexOf(','));
		textColor = textColor.slice(textColor.indexOf(' ') + 1);
		g = textColor.slice(0, textColor.indexOf(','));
		textColor = textColor.slice(textColor.indexOf(' ') + 1);
		b = textColor.slice(0, textColor.indexOf(')'));
		var l = rgbToHsl(r, g, b);
		if (l > 0.7) {
			$('.mynav>ul>li>a').css('text-shadow', '0 1px 1px rgba(0, 0, 0, .35)');
			$('.mynav>ul>li>a>span').css('border-color', 'rgba(0, 0, 0, .35)');
		}
		else
		{
			$('.mynav>ul>li>a').css('text-shadow', '0 1px 0 rgba(255, 255, 255, .35)');
			$('.mynav>ul>li>a>span').css('border-color', 'rgba(255, 255, 255, .35)');
		}
	})();

	function rgbToHsl(r, g, b) {
	    r /= 255, g /= 255, b /= 255;
	    var max = Math.max(r, g, b), min = Math.min(r, g, b);
	    var h, s, l = (max + min) / 2;

	    if(max == min){
	        h = s = 0;
	    }
	    else {
	        var d = max - min;
	        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
	        switch(max){
	            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
	            case g: h = (b - r) / d + 2; break;
	            case b: h = (r - g) / d + 4; break;
	        }
	        h /= 6;
	    }
	    return l;
	}
});
} )( jQuery );

//contact start


 




 function myprofile() {
    var x = document.getElementById('drop1');
    x.classList.toggle("drop1");
	
}

window.onclick = function(event) {
  if (!event.target.matches('.my_1')) {
    var dropdowns = document.getElementsByClassName("drop");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('drop1')) {
        openDropdown.classList.remove('drop1');
      }
    }
  }
  

  
  
}


var header = document.getElementById("myslide");
var btns = header.getElementsByClassName("myslidemenu");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
 if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active", "");
	
  }
  this.className += " active";
  });
}
var actualBtn = document.getElementById('actual-btn');

var fileChosen = document.getElementById('file-chosen');

actualBtn.addEventListener('change', function(){
  fileChosen.textContent = this.files[0].name
})