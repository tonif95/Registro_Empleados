let empleados = []

function crearEmpleados(nombre,apellidos,edad,localidad,nacionalidad){
    this.nombre = nombre,
    this.apellidos = apellidos,
    this.edad = edad,
    this.localidad = localidad,
    this.nacionalidad = nacionalidad    

}

function agregarEmpleado(){    
    let datoNombre = document.getElementById("nombre").value
    let datoApellidos = document.getElementById("apellidos").value
    let datoEdad = document.getElementById("edad").value
    let datoLocalidad = document.getElementById("localidad").value
    let datoNacionalidad = document.getElementById("nacionalidad").value


    let empleadoNuevo = new crearEmpleados(datoNombre,datoApellidos,datoEdad,datoLocalidad,datoNacionalidad)
    
    empleados.push(empleadoNuevo)
    console.log(empleados)
}

function empleadosRegistrados() {
    let datoResultado = document.getElementById("Resultado")
    datoResultado.innerHTML = "" // Limpiar el contenido antes de mostrar los resultados
  
    for (let empleado of empleados) {
      for (let caracteristica in empleado) {
        datoResultado.innerHTML += caracteristica + ": " + empleado[caracteristica] + "<br>"
      }
      datoResultado.innerHTML += "<br>"
    }
  }
  