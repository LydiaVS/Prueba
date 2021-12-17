let portada = document.querySelector("#portada").contentDocument;

//No detecta el id
let forma = portada.querySelector("#patata");
console.log(forma);


//No detecta el movimiento dentro del svg
document.addEventListener('mousemove', (e) => {
	console.log(`
	Screen X/Y: (${e.screenX},${e.screenY})
	Client X/Y: (${e.clientX},${e.clientY})
	`)
	
});



