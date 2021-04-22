function productInfo(){
    var select = document.getElementById("reason-validation")
    if(select.value === "product"){
        document.getElementById("productIds").removeAttribute("style")

    }
    else{
        document.getElementById("productIds").style.display="none"
    }

}

function nameValidate(){
    const name = document.getElementById('name-validation').value
    if(name.length < 4 || name === null){
        var name_input = document.getElementById('name-validation').style.border =("solid #EA2448")
        var name_error = document.getElementById('name-error').setAttribute("class", "invalid-feedback d-block")
        document.getElementById('submitBtn').setAttribute('class', 'btn btn-light disabled')
    }
    else{
        var name_input = document.getElementById('name-validation').style.border ="solid green"
        var name_error = document.getElementById('name-error').setAttribute("class", "invalid-feedback")
        document.getElementById('submitBtn').setAttribute('class', 'btn btn-light')
    }

}

function emailValidate(){
    const email = document.getElementById('email-validation').value
    var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i

    if(!pattern.test(email)){
        var name_input = document.getElementById('email-validation').style.border =("solid #EA2448")
        var name_error = document.getElementById('email-error').setAttribute("class", "invalid-feedback d-block")
        document.getElementById('submitBtn').setAttribute('class', 'btn btn-light disabled')
    }
    else{
        var name_input = document.getElementById('email-validation').style.border ="solid green"
        var name_error = document.getElementById('email-error').setAttribute("class", "invalid-feedback")
        document.getElementById('submitBtn').setAttribute('class', 'btn btn-light')
    }

}

function reasonValidate(){
    document.getElementById('reason-validation').style.border ="solid green"
}

function productValidate(){
    document.getElementById('productIds').style.border="solid green"
}

function messageValidate(){
    const message = document.getElementById('message-validation').value
    if(message.length < 10 || message.length > 30){
        var messageBox = document.getElementById('message-validation').style.border =("solid #EA2448")
        var message_error = document.getElementById('message-error').setAttribute("class", "invalid-feedback d-block")
        document.getElementById('submitBtn').setAttribute('class', 'btn btn-light disabled')
    }
    else{
        var messageBox = document.getElementById('message-validation').style.border ="solid green"
        var message_error = document.getElementById('message-error').setAttribute("class", "invalid-feedback")
        document.getElementById('submitBtn').setAttribute('class', 'btn btn-light')
    }
}