var corpo = 0;
		  carousel();
		  
		  function carousel() {
			var i;
			var x = document.getElementsByClassName("fotos-carousel");
			for (i = 0; i < x.length; i++) {
			  x[i].style.display = "none";  
			}
			corpo++;
			if (corpo > x.length) {corpo = 1}    
			x[corpo-1].style.display = "block";  
			setTimeout(carousel, 5000); 
		  }