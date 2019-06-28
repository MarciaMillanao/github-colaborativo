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

const datos = STUDENTS.student;
for(let i = 0; i < datos.length; i++){
  console.log(datos[i].name);
  console.log(datos[i].lastName);
  console.log(datos[i].hobby);
}