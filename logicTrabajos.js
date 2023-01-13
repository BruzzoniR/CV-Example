let trabajoApuntado = document.getElementById("listaTrabajos");
let linkEmpresa = "";
trabajoApuntado.onmouseover = apuntarTrabajo;

function apuntarTrabajo(evento){

    if (evento.target.id != ""){
        linkEmpresa = evento.target.id;
        console.log(linkEmpresa);
    }

    switch (linkEmpresa) {
        case "empresa1":
            ocultarTrabajos();
            mostrarTrabajoOculto("trabajo1");
            break;
            
            case "empresa2":
                ocultarTrabajos();
                mostrarTrabajoOculto("trabajo2");
            break;

            case "empresa3":
                ocultarTrabajos();
                mostrarTrabajoOculto("trabajo3");
            break;
    
        default:
            ocultarTrabajos();
            break;
    }
    

}

function ocultarTrabajos(){
    document.getElementById("trabajo1").style.display="none";
    document.getElementById("trabajo2").style.display="none";
    document.getElementById("trabajo3").style.display="none";
}

function mostrarTrabajoOculto(elemento){
    document.getElementById(elemento).style.display="inline";
}