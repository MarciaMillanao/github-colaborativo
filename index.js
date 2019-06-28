//Aca crearemos nuestro js
const name = "Alicia";
const lastName = "Díaz";

const containerDatos = document.getElementById('container_datos');
document.getElementById('clickme').addEventListener('click', () => {
  containerDatos.innerHTML = `<h2> 
                                Tu nombre es: ${name}
                              </h2>
                              <h2> 
                                Tu Apellido es: ${lastName}
                              </h2>`
})