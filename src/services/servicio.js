//CONSUMIENDO APIS

//1. Declarar una variable para almacenar la URL del API
let url="https://api.spotify.com/v1/artists/790FomKkXshlbRYZFtlgla/top-tracks?market=US"

//2. Almacenar en una variable o en varias variables datos de control que se necesiten en el API
let token="Bearer BQBxDjRMXmpnMOsrX06gtWFpOEoM2ta7JH1h6VAk4dfQ-F4TPCQ98Xke6WpbjUYTh_S_kxBAt5KmdGBQlSlAHANc9HXQlz3Gxi8o5gtI0NqOY8t-0tw"

//3. Construir la petición que se va a enviar 
let peticion={
    method:"GET",
    headers:{
        Authorization:token
    }
    
}

//4. Ejecutar el consumo del API
fetch(url,peticion)
.then(function(){})
.then(function(){})
.catch(function(){})