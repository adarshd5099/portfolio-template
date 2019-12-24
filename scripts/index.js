function openmodal(n){

	switch(n){
		case 1:$('#work1').modal();
		break;
		case 2:$('#work2').modal();
		break;
		case 3:$('#work3').modal();
		break;
		case 4:$('#work4').modal();
		break;
		case 5:$('#work5').modal();
		break;
		case 6:$('#work6').modal();
		break;
		case 7:$('#work7').modal();
		break;
		case 8:$('#work8').modal();
		break;

	}
	
	
}







function test(){
	function loaded() {
 	  document.getElementById("hideAll").style.display = "none";
	}
	var img = document.querySelector('img')
	// img.onload = loaded();


	// if (img.complete) {
 //  		loaded()
	// }

	if( img.complete && img.naturalHeight !== 0 ){
		document.getElementById("loader").style.display = "none";
  		document.getElementById("myDiv").style.display = "block";
	}
}


