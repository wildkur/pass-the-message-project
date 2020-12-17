// Tu código aquí
(function() {
const form = document.querySelector('#message-form')

form.addEventListener('submit', function(e){
    console.log("Información sobre el objeto event: ", e)
    e.preventDefault() // Curioso sobre lo que hace esto? Mira como se comporta el formulario cuando haces clic en "Enviar" si esta línea está comentada. 
    var inputMessage = document.querySelector("#message")
    var alertMessage = document.querySelector(".feedback")
    var displayMessage = document.querySelector(".message-content")
    
    if (inputMessage === '') {
        alertMessage.classList.add('show')
        //setTimeout(function(){alertMessage.classList.remove('show')}, 2000)
    }
    else{
        displayMessage.textContent = inputMessage.value
        console.log("Display that:" + displayMessage.textContent)
        inputMessage.value = ''
    }
    
})
})()


