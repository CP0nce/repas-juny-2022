const persones = []

// send form
document.getElementsByName("send").onclick=function (event){
    event.preventDefault();

    if (validarForm()){
        // Guardar dins d'array 
        let name = document.getElementById('name').value.trim()
        let surname = document.getElementById('surname').value.trim()

        let persona = {
            "name": name,
            "surname": surname
        }
        persones.push(persona);

        // printar array a pantalla 
        let longitud = persones.length;

        let texto = "<ul>";
        for (let i = 0; i<lengitud; i++){
            texto +="<li>" + persones[i] + "<li>";
        }
        texto +="</ul>";

        document.getElementById('usuaris').innerHTML = texto;

    }

};

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
    if (!testLongitud(surname)){
        document.getElementById('resultat').innerHTML = "SURNAME: longitud incorrecta"
        return false
    }
    if (!testMajuscules(name)){
        document.getElementById('resultat').innerHTML = "NAME: ha de començar amb majúscula"
        return false
    }
    if (!testMajuscules(surname)){
        document.getElementById('resultat').innerHTML = "SURNAME: ha de començar amb majúscula"
        return false
    }
    if(!testNomesLletres(name)){
        document.getElementById('resultat').innerHTML = "NAME: només pot contenir lletres"
        return false
    }
    if(!testNomesLletres(surname)){
        document.getElementById('resultat').innerHTML = "SURNAME: només pot contenir lletres"
        return false
    }
}

function testLongitud(name){
    if (name != '' && name.length < 20)
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

function testNomesLletres(name){
    const letras = /^[A-Za-z]+$/;
    if (name.value.match(letras)){
        return true;
    } else {
        return false;
    }
}