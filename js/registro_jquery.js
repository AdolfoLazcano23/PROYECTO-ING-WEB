$("formulario_registro").validate({
    rules:{
        nombre: {
            required: true,
            minlength:  3,
            maxlength:  30
        },
        apellido: {
            required: true,
            minlength:  3,
            maxlength:  30
        },
        rut: {
            required: true,
        },
        email:  {
            required: true,
            email: true
        },
        telefono: {
            required: true,
            minlength: 8,
            maxlenght: 9
        }
    }
})



$('#registrar').click(function(){
    if($("#formulario_registro").valid() == false){
        return;
    }
    let nombre = $("nombre").val()
    let apellido = $("apellido").val()
    let rut = $("rut").val()
    let edad = $("edad").val()
    let email = $("email").val()
    let telefono = $("telefono").val()
})