function calordr()
{
	var frstname=document.getElementById("fn").value;
	var lastname=document.getElementById("ln").value;
	var phone=document.getElementById("pn").value;
	var flour=document.getElementById("kitna1").value;
	var rice=document.getElementById("kitna2").value;
	var sugar=document.getElementById("kitna3").value;
	var salt=document.getElementById("kitna4").value;
	document.getElementById("ta").value = "₹ "+ parseInt(flour*30+ rice*50 + sugar*45 + salt*20);
	var amt= document.getElementById("ta").value;
	var amnt= amt.slice(2,);
	document.getElementById("ordr_sum").innerHTML="<h2>ORDER SUMMARY</h2>";
	if (frstname=="" && lastname=="" && phone=="")
		document.getElementById("ordr_sum").innerHTML+="<p>UNKNOWN<br><br>Phone no. is not provided</p>";
	document.getElementById("ordr_sum").innerHTML+="<p>"+ frstname.toUpperCase() +" "+ lastname.toUpperCase() +"<br><br>"+phone+"</p>";
	document.getElementById("ordr_sum").innerHTML+="<p>Total ammount is:  <b>₹ " + parseInt(parseInt(amnt) + 0.2 * amnt)+"</b>  (with 20% tax)</p><br><br><br>";
}

function frst()
{
	var inpt=document.getElementById("fn").value;
	var reg=/^[A-Za-z\s\-\']{2,50}$/;
	if (reg.test(inpt)) 
	{
		document.getElementById("fnp").innerHTML="<strong>valid</strong>";
		document.getElementById("fnp").style.color="palegreen";
	}
	else
	{
		if (inpt.length==0)
			document.getElementById("fnp").innerHTML="Please Enter Your First name";
		else
			document.getElementById("fnp").innerHTML="<strong>invalid</strong>";
		document.getElementById("fnp").style.color="red";
	}
}

function last()
{
	var inpt=document.getElementById("ln").value;
	var reg=/^[A-za-z\s\-\']{0,50}$/;
	if (reg.test(inpt))
	{
		if (inpt.length==0)
			document.getElementById("lnp").innerHTML="  ";
		else
		{	
		document.getElementById("lnp").innerHTML="<strong>valid</strong>";
		document.getElementById("lnp").style.color="palegreen";
		}
	}
	else
	{
		document.getElementById("lnp").innerHTML="<strong>invalid</strong>";
		document.getElementById("lnp").style.color="red";
	}
	
}

function phn()
{
	var inpt=document.getElementById("pn").value;
	var rege= /^[\d]{3}-[\d]{3}-[\d]{4}$/;
	if (rege.test(inpt) || (inpt.length==10 && parseInt(inpt)))
	{
		document.getElementById("pnt").innerHTML="<strong>valid</strong>";
		document.getElementById("pnt").style.color="palegreen";
	}
	else
	{
		document.getElementById("pnt").innerHTML="<strong>invalid</strong>";
		document.getElementById("pnt").style.color="red";
	}
}

function updt()
{
	var flour=document.getElementById("kitna1").value;
	var rice=document.getElementById("kitna2").value;
	var sugar=document.getElementById("kitna3").value;
	var salt=document.getElementById("kitna4").value;
	document.getElementById("ta").value = "₹ "+ parseInt(flour*30+ rice*50 + sugar*45 + salt*20);
}

function validation_form()
{
	var am= document.getElementById("ta").value;
	var tam= am.slice(2,);
	if (tam==0)
	{
		alert("Please select at least one item.");
		return false;
	}
	else 
	{
			alert("Thankyou! your order has been submitted to our server. We will contact you shortly. Have a nice day:) you have to pay ₹ "+ parseInt(parseInt(tam) + 0.2 * tam)+ " taxes included");
			return true;
	}	
}
