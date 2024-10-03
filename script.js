//your JS code here. If required.

window.addEventListener('resize',()=>{
	var width = window.innerWidth;
	var height = window.innerHeight;
	document.getElementById('sizeInfo').textContent = `Width: ${width} and Height: ${height}`;
});
