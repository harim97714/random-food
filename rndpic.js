function rand_number(n)
{
	var x;
	x=Math.round(Math.random()*100);
	x%=n;
	return x;
}
function food()
{
	var img = new Array();
	img[0]='<img src="피자.png" border="0" width="800" height="600" /><br /><h1>피자</h1>';
	img[1]='<img src="치킨.jpg" border="0" width="800" height="600" /><br /><h1>치킨</h1>';
	img[2]='<img src="삼겹살.jpg" border="0" width="800" height="600" /><br /><h1>삼겹살</h1>';
	img[3]='<img src="비빔밥.jpg" border="0" width="800" height="600" /><br /><h1>비빔밥</h1>';
	img[4]='<img src="햄버거.jpg" border="0" width="800" height="600" /><br /><h1>햄버거</h1>';
	var n=rand_number(5); 
	document.write(img[n]);
}