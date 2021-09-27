class Direccion{
    constructor(zip, calle){
        this.zip = zip;
        this.calle = calle;
    }
}

class Persona{
    constructor(nombre, { edad, telefono, direccion } = {}) {
        this.nombre = nombre;
        this.edad = edad;
        this.telefono = telefono;
        this.direccion = direccion;
    }
}

let Persona = new PBuilder('Karla', {edad:23, telefono:'4491039704', direccion: new Direccion('119', 'Bosques')});
console.log(Persona);