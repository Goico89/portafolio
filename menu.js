var botonMenu = document.getElementById ("botonMenu");
var menu = document.getElementById ("menu");

botonMenu.addEventListener ("click", activarMenu);
botonMenu.addEventListener ("touchstart", activarMenu);

function activarMenu() 
{
	menu.classList.toggle("menuActivo");
	
}

