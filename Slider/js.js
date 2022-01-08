     

	var img = document.getElementById('img')

	var images = ['mosk.jpg','1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg']

    var x =0;

    function slide(){
    	if (x<images.length) {
    		x = x+1
    	}else{
    		x =1;
    	}
    	img.innerHTML = "<img src="+images[x-1]+">";
    }

// auto slide


setInterval(slide,1500);
