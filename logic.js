let linkApuntado = document.getElementById("listaEducacion");
let linkInstitucion = "";
linkApuntado.onmouseover = apuntarLink;

function mostrarImagenOculta(elemento){
    document.getElementById(elemento).style.display="inline";
}

function ocultarImagenes(){
    document.getElementById("imgInst1").style.display="none";
    document.getElementById("imgInst2").style.display="none";
    document.getElementById("imgInst3").style.display="none";
    document.getElementById("imgInst4").style.display="none";
}


function apuntarLink(evento){

    if (evento.target.id != ""){
        linkInstitucion = evento.target.id;
        console.log(linkInstitucion);
    }

    switch (linkInstitucion) {
        case "institucion1":
            ocultarImagenes();
            mostrarImagenOculta("imgInst1");
            break;
            
            case "institucion2":
                ocultarImagenes();
                mostrarImagenOculta("imgInst2");
            break;

            case "institucion3":
                ocultarImagenes();
                mostrarImagenOculta("imgInst3");
            break;

            case "institucion4":
                ocultarImagenes();
                mostrarImagenOculta("imgInst4");
            break;
    
        default:
            ocultarImagenes();
            break;
    }
    

}

