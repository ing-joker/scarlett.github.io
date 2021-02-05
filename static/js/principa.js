const fila = document.querySelector('.contenedor-xd');
const peliculas = document.querySelectorAll('.pelicula-xd');
const numeroPaginas = Math.ceil(peliculas.length / 3);
const flechaIzquierda = document.getElementById('f-izq');
const flechaDerecha = document.getElementById('f-der');

//       funcion flecha derecha
flechaDerecha.addEventListener('click', () => {
	fila.scrollLeft += fila.offsetWidth;		//total =2910	scrolleft	2154	1723	431		2984	2387	597
	if(fila.scrollLeft + fila.offsetWidth == fila.scrollWidth){
		fila.scrollLeft=0;
	}

	const indicadorActivo = document.querySelector('.indicadores .activo');
	if(indicadorActivo.nextSibling){
		indicadorActivo.nextSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

//      funcion flecha izquierda
flechaIzquierda.addEventListener('click', () => {
	fila.scrollLeft -= fila.offsetWidth;
	if (fila.scrollLeft==0){
		fila.scrollLeft=fila.scrollWidth-fila.scrollLeft;
	}
	const indicadorActivo = document.querySelector('.indicadores .activo');
	if(indicadorActivo.previousSibling){
		indicadorActivo.previousSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

// iconos de paginas

for(let i = 0; i < numeroPaginas; i++){
	const indicador = document.createElement('button');

	if(i === 0){
		indicador.classList.add('activo');
	}

	document.querySelector('.indicadores').appendChild(indicador);
	indicador.addEventListener('click', (e) => {
		fila.scrollLeft = i * fila.offsetWidth;

		document.querySelector('.indicadores .activo').classList.remove('activo');
		e.target.classList.add('activo');
	});
}

// efecto
peliculas.forEach((pelicula) => {
	pelicula.addEventListener('mouseenter', (e) => {
		const elemento = e.currentTarget;
		setTimeout(() => {
			peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
			elemento.classList.add('hover');
		}, 300);
	});
});

fila.addEventListener('mouseleave', () => {
	peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
});

const separadas= document.querySelectorAll('.separado');

function toggle(sola){
	console.log(sola)
	separadas.forEach(single => single.style.display='none');
	
	var unica =document.getElementById(sola);
	unica.style.display='block';
	console.log(sola.replace('.','#'))
	scrollperro('#peli-individual',500)
	//var scroll2 = $('#peli-individual').offset.top;
	//$('html, body').animate({
	//		scrollTop: scroll -85
	//}, 2000);
}  
function scrollperro(xd,t){
	var scroll = $(xd).offset().top;
	$('html, body').animate({
		scrollTop: scroll -105
	}, t);
};

/////// cambio de clase activo
const rutas =document.querySelectorAll('.referencias-internas a');
rutas.forEach(enl => {
	enl.addEventListener('click', (e)=>{
		rutas.forEach(enlace => { enlace.classList.remove('activo'); });
		e.target.classList.add('activo');
	});
});