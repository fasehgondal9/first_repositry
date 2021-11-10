function check_age(){
	x=prompt("age","");
	y= new Date();
	year=y.getFullYear();
	age=year-x;
	document.getElementById('aa').innerHTML="Your age is "+age;
}
function change(y){
	//y=document.getElementById('select').value;
	document.body.style.backgroundColor=y;
	//document.getElementById('body').style.backgroundColor=y;
}
function login(){
	email=prompt("Ehter Email......","");
	pass=prompt("Ehter Password......","");
	if(email==""||pass=="")
	{
		document.getElementById('ab').innerHTML=" Plz fill all the feilds....";
	}
	else
	{
		document.getElementById('ab').innerHTML=" Your Email is: "+email;
		document.getElementById('ac').innerHTML=" Your Email is: "+pass;	
	}
}