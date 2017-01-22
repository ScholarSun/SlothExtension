console.log('hello')
document.getElementById('display').innerHTML+= 'LIST';
document.getElementById('display').innerHTML+= '<br>';
document.getElementById('textSearch').addEventListener('keypress', function (e) {
    	var key = e.which || e.keyCode;
    	if (key === 13) { // 13 is enter
    		line = document.getElementById('textSearch').value;
      		console.log(line)
      		document.getElementById('display').innerHTML+=line;
      		document.getElementById('display').innerHTML+= '<br>';
      		document.getElementById('textSearch').value='';
	    	}
	});