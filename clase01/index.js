function rectangulo(altura, base){
return altura * base;
}

function triangulo(altura, base){
    return (altura * base) /2;
}

function dolarhoy(ars){
    return ars /1405;
}   

function preciofinal(precio){
    return precio * 1,2;
}

function mitad (numero){
    return numero/2;
}

function sumar(num1, num2){
    return num1 + num2;
}

function restar(num1, num2){
    return num1 - num2;
}

function dividir(num1, num2){
    num1 / num2;
}

function multiplicar(num1, num2){
    num1 * num2;
}

let auto = {
    patente: "AA 760 ZJ",
    color: "azul",
    kilometros: 43000,
    esElecrtrico: false,
    asientos: ["acompañante", "conductor", "pasajero1","pasajero2","pasajero3"]

};


let ramiroAmalvy = {
    nombre: "Ramiro",
    apellido: "Amalvy Degreef",
    dni: 47961516,
    comidasfav: ["hamburguesa", "goulash", "tacos"],
    saludar: function(){
        return "hola! mi nombre es" + this.nombre + this.apellido + ", mi dni es" + this.dni+ "y mi comida favorita es" +this.comidasfav[0];
    }
};
console.log(ramiroAmalvy.saludar())

let miauto = {
    marca: "bmw",
    modelo: "120i sport",
    año: 2016,
    color: "azul",
    posicion: 0,
    avanzar: function(numeropositivo){
        numeropositivo + this.posicion
    },
    retroceder: function(numeronegativo){
        this.posicion - numeronegativo
    },
}

console.log(miauto.posicion())


let ironman = {
    nombre: "ironman",
    equipo: "avengers",
    poderes: ["volar", "lanzar misiles", "disparar laser"],
    energia: 100,
}
    


for (let i = 0; i < 5; i++) {
    console.log("Practicando con el bucle for");
}


for (let i = 0; i < 10; i++) {
    console.log("la variable i tiene el valor" + i );
};

let ganancias = [3213, -4829, 756, 8970, -3051, -8705, 1601, 2630, 5875, -7301, 3041, 686];
let total = 0;

for (let i = 0; i < ganancias.length; i++) {
    total += ganancias[i];
}

console.log("El total de ganancias es:", total);


let healingIsDifficult = [
  'Fear', 'Drink to Get Drunk', 'Taken for Granted', 'Blow It All Away',
  'Get Me', 'Im Not Important to You', 'Sober and Unkissed',
  'Healing Is Difficult', 'Judge Me', 'Little Man', 'Insidiously'
];

for (let i = 0; i < healingIsDifficult.length; i++) {
    console.log(healingIsDifficult[i]);
}

let got = [
    { nombre: "Jon", apellido: "Snow", edad: 23, ciudad: "Winterfell" },
    { nombre: "Daenerys", apellido: "Targaryen", edad: 19 },
    { nombre: "Arya", apellido: "Stark", edad: 12, ciudad: "Winterfell" },
    { nombre: "Tyrion", apellido: "Lannister", edad: 32, ciudad: "Casterly Rock" }
];

