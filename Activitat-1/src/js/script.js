const persones = []

// send form
document.getElementById("send").onclick=function (event){
    event.preventDefault();

    if (validarForm()){
        // Guardar dins d'array 
        let name = document.getElementById('name').value.trim()
        let surname = document.getElementById('surname').value.trim()

        let persona = {
            "name": name,
            "surname": surname
        }
        // persones.push(persona);

        // Guardar dins json
        guardar_persona_en_API(persona)

        // printar array a pantalla 
        // let longitud = persones.length;

        // let texto = "<ul>";
        // for (let i = 0; i<longitud; i++){
        //     texto +="<li>" + persones[i].name +" " + persones[i].surname 
        // }
        // texto +="</ul>";

        // document.getElementById('usuaris').innerHTML = texto;

        // printar json en pantalla FETCH
        pintar_persona_API()

    }

};

function guardar_persona_en_API(persona) {
    fetch('http://localhost:3000/usuarios', {
        method:"POST",
        body: JSON.stringify(persona),
        headers: {
            "content-type": "application/json; charset-UTF-8"
        }
    } )
    .then(response => response.json())
    .then(json => console.log(json))
}

function pintar_persona_API() {
    fetch('http://localhost:3000/usuarios')
        .then((response) => response.json())
        .then((persones) =>{
            let usuaris = document.getElementById('usuaris')
            usuaris.innerHTML = ' '

            for (let persona of persones) {
                usuaris.innerHTML += "<divclass='usuari'>" + persona.name + " " + persona.surname + "</div>"
            }
        })
}

// Validar formulari
// si no valida mostra un error

// prevent default en el event

function validarForm() {

    // dades
    let name = document.getElementById("name").value
    let surname = document.getElementById("surname").value


    if (!testLongitud(name)){
        document.getElementById('resultat').innerHTML = "NAME: longitud incorrecta"
        return false
    }
    if (!testLongitudS(surname)){
        document.getElementById('resultat').innerHTML = "SURNAME: longitud incorrecta"
        return false
    }
    if (!testMajuscules(name)){
        document.getElementById('resultat').innerHTML = "NAME: ha de comen??ar amb maj??scula"
        return false
    }
    if (!testMajusculesS(surname)){
        document.getElementById('resultat').innerHTML = "SURNAME: ha de comen??ar amb maj??scula"
        return false
    }
    if(!testNomesLletres(name)){
        document.getElementById('resultat').innerHTML = "NAME: nom??s pot contenir lletres"
        return false
    }
    if(!testNomesLletresS(surname)){
        document.getElementById('resultat').innerHTML = "SURNAME: nom??s pot contenir lletres"
        return false
    }
    return true
}

function testLongitud(name){
    if (name != '' && name.length < 20)
        return true;
    else 
        return false;
}
function testLongitudS(surname){
    if (surname != '' && surname.length < 20)
        return true;
    else 
        return false;
}

function testMajuscules(name){
    const pattern = /[A-Z]/;
    // comprova la lletra
    let resultat1 = pattern.test(name[0]);
    if (!resultat1)
        return false;

    let posEspai = name.indexOf(" ") == -1
    if (posEspai) {
        // no hi ha espai en blanc
        return true
    } else {
        // let resultat2 = pattern.test(name[posEspai+1]);
        if ( pattern.test(name[posEspai+1]) ){
            return true
        }
        else {
            return false
        }
    }
}   
function testMajusculesS(surname){
    const pattern = /[A-Z]/;
    // comprova la lletra
    let resultat1 = pattern.test(surname[0]);
    if (!resultat1)
        return false;

    let posEspai = surname.indexOf(" ") == -1
    if (posEspai) {
        // no hi ha espai en blanc
        return true
    } else {
        // let resultat2 = pattern.test(name[posEspai+1]);
        if ( pattern.test(surname[posEspai+1]) ){
            return true
        }
        else {
            return false
        }
    }
}   

function testNomesLletres(name){
    var letras = /^[A-Za-z]+$/;
    if (name.match(letras)){
        return true;
    } else {
        return false;
    }
}
function testNomesLletresS(surname){
    var letras = /^[A-Za-z]+$/;
    if (surname.match(letras)){
        return true;
    } else {
        return false;
    }
}