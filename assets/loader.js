window.addEventListener("load", ()=> {
	const loader = document.querySelector(".pre-loader");
	const body = document.querySelector(".home");
	//console.log(loader);
	setTimeout(function(){
		loader.className+=" loader-hide";
		body.classList.remove("scroll-lock");
	},3000);	
})