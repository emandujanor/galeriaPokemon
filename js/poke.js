var nombre=document.getElementById("nombrePokemon");
var color=document.getElementById("colorPoquemon");
var ataque=document.getElementById("puntosAtaque");
var pokemons=[];


//Esta es una clase mi molde, con propiedades nombre color y puntos de ataque
function Pokemon(nombre,color,puntosAtaque){
  this.nombre = nombre;
  this.color = color;
  this.vida = 100;
  this.puntosAtaque = puntosAtaque;
}


function crearNuevo(){
		var pokemon = new Pokemon(nombre.value,
			color.value,
			parseInt(ataque.value))
		pokemons.push(pokemon);
	mostrarPokemon();
}

function mostrarPokemon(){
	var opcionUno=document.getElementById("uno");
	var opcionDos=document.getElementById("dos");
	
	//genera la opcion en el select 1
    var elemento = document.createElement("option");
	var pokemon = pokemons[pokemons.length - 1];
	var atributos= pokemon.nombre +" " + pokemon.color +" " + pokemon.puntosAtaque +" " + pokemon.vida ;
	elemento.innerText = atributos;

    opcionUno.appendChild(elemento);

	//genera la opcion en el select 2
    var elemento = document.createElement("option");
	var pokemon = pokemons[pokemons.length - 1];
	var atributos= pokemon.nombre +" " + pokemon.color +" " + pokemon.puntosAtaque +" " + pokemon.vida;
	elemento.innerText = atributos;

    opcionDos.appendChild(elemento);
	alert("Haz creado un nuevo pokemon");
}

function pelear(){
	var opcionUno=document.getElementById("uno").value;
	var opcionDos=document.getElementById("dos").value;
	if (opcionUno == opcionDos){
		alert("Elige a tu oponente. No puedes pelear contra ti mismo");
	} 
	else {
		var atacante= opcionUno.split(" ");
		var contrincanteUnoAtaque=parseInt(atacante[2]);
		var contrincante= opcionDos.split(" ");
		var contrincanteDosVida=parseInt(contrincante[3]);
		var contrincanteUno=atacante[0];
		var contrincanteDos=contrincante[0];
		var reporte=document.getElementById("reporte");
		nivelVida= contrincanteDosVida - contrincanteUnoAtaque;
			if (nivelVida<=0){
				reporte.innerText= " Haz ganado " + contrincanteDos + " está muerto";
			}
			else{
				reporte.innerText=  contrincanteUno+ " atacó a " + contrincanteDos + " ahora " + contrincanteDos + " tiene una vida de " + nivelVida;
			}
				
		}
	
	}
