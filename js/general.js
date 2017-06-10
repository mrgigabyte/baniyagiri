function sendReply(){
//    $('.bot-container').addClass('isActive')
    $('.center_body').append(`
    <div class="user-container">
    <p class="user-reply">`+$('.message_input').val()+`</p><div class="user-pic"></div></div>`)
    setTimeout(botReply,1000)
    
}

var botReply = function botReply(){
    $('.center_body').append(`
    <div class="bot-container">
    <div class="bot-pic"></div>
    <p class="bot-reply">`+$('.message_input').val()+`</p></div>`)
    
}

