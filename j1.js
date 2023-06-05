function gm()
{
			event.preventDefault();
			let msg = document.getElementById("msg");
			let urladd = "http://api.quotable.io/random";
			fetch(urladd)
			.then(res => res.json())
			.then(data => msg.innerHTML=data.author + " ==> " + data.content)
			.catch(err => msg.innerHTML=err);
}