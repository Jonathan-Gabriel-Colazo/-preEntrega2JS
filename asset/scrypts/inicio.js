function Nusuario(nombre, fechaN, telefono, email, alias, pass) {
    this.nombre = nombre;
    this.fechaN = fechaN;
    this.telefono = telefono;
    this.email = email;
    this.alias = alias;
    this.pass = pass;
}

let listaUsuarios = [
    {
        nombre: "Jonathan  Colazo",
        fechaN: "28/02/1990",
        telefono: 3517535004,
        email: "jonathan34964@gmail.com",
        alias: "Jonathan2589",
        pass: "34964828",
    },


    {
        nombre: "Gabriel  Colazo",
        fechaN: "29/12/2007",
        telefono: 3518075373,
        email: "gabrielcolazo994@gmail.com",
        alias: "Gabriel994",
        pass: "48753765",
    },

    {
        nombre: "Bianca  Colazo",
        fechaN: "12/9/2009",
        telefono: 3512404170,
        email: "biancalarayasmincolazo@gmail.com",
        alias: "Bianca989",
        pass: "49963077",
    },

    {
        nombre: "Sebastian  Colazo",
        fechaN: "22/12/2011",
        telefono: 3518076866,
        email: "sebascolazo2@gmail.com",
        alias: "Sebastian709",
        pass: "52101702",
    },


];

function guardarUsuario() {
    localStorage.setItem('Nusuario', JSON.stringify(listaUsuarios));
}

function cargarElementos() {
    let usuariosGuardados = localStorage.getItem('Nusuarios');
    if (usuariosGuardados) {
        listaUsuarios = JSON.parse(usuariosGuardados);
    }
}


document.getElementById('nUser').addEventListener('click', () => {
    formNewUser.style.display = "flex";
});

document.getElementById('RevalidaDatos').addEventListener('click', () => {
    recuperaUsuario.style.display = "flex";
});

function agregaUsuario() {
    let nombre = document.getElementById('ingName').value;
    let fechaN = document.getElementById('ingDate').value;
    let telefono = parseInt(document.getElementById('ingTel').value);
    let email = document.getElementById('ingEmail').value;
    let alias = document.getElementById('ingNewalias').value;
    let pass = document.getElementById('ingNewPass').value;

    let Usuario = new Nusuario(nombre, fechaN, telefono, email, alias, pass);

    listaUsuarios.push(Usuario);

    console.log(listaUsuarios);
}

document.getElementById('buttonNewUser').addEventListener('click', () => {
    agregaUsuario();
    guardarUsuario();
    formNewUser.style.display = "none";

});


function ingresoUsuario() {
    let ingAlias = document.getElementById("ingAlias").value;
    let ingPass = document.getElementById("ingPass").value;

    let acceso = false;

    listaUsuarios.forEach((usuario) => {
        if (usuario.alias === ingAlias && usuario.pass === ingPass) {
            acceso = true;
        }
    });

    acceso == true ? window.location.href = "./asset/pages/plataforma.html" : Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Los datos no coinciden!',
    })


}

document.getElementById("buttonLogin").addEventListener("click", () => {
    ingresoUsuario();
})

function RecuperUsuario() {
    let recuAlias = document.getElementById("recuAlias").value;
    let recuEmail = document.getElementById("recuEmail").value;

    let acces = false;
    let indice = 0

    listaUsuarios.forEach((usuario, i) => {
        if (usuario.alias === recuAlias && usuario.email === recuEmail) {
            indice = i
            acces = true;
        }
    });

    if (acces==true) {
        Swal.fire('Tu clave es ' + listaUsuarios[indice].pass);
        recuperaUsuario.style.display = "none";
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Los datos no coinciden!',

        });
        recuperaUsuario.style.display = "none";
    }

}

document.getElementById("buttonRus").addEventListener("click", () =>
    RecuperUsuario(),
    recuperaUsuario.style.display = "none",
)
