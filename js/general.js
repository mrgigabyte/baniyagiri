
function sendReply(){
//    $('.bot-container').addClass('isActive')
    $('.center_body').append(`
    <div class="user-container">
    <p class="user-reply">`+$('.message_input').val()+`</p><div class="user-pic"></div></div>`)
    setTimeout(botReply,1000,$('.message_input').val())
    $('.message_input').val("") 
    
}

var botReply = function botReply(text){
    console.log(text)
    if(isEmpty(queue)!=true){
        if(queue.ddtbalance!=undefined){
            if(queue.ddtbalance.item==undefined){
                budgetText=deductBalance(text)
            }
        }
    }
    else if(text.split(" ")[0].toLowerCase()==="budget"){
        if(user.Budget===undefined){
            setBudget(text.split(" ")[1])
            budgetText="Your budget has been set successfully"
        }
        
        else{ 
            budgetText="You already have a budget set! To makes changed in the initial budget please send 'Update Budget 1500'"
        }
        
    }
    
    else if(text.split(" ")[0].toLowerCase()==="deduct"){
        if(user.Budget===undefined){
            budgetText="You dont have a budget yet!"
        }
        
        else{ 
            budgetText=deductBalance(text)
        }
        
    }
     $('.center_body').append(`
        <div class="bot-container">
            <div class="bot-pic"></div>
            <p class="bot-reply">`+budgetText+`<p>
        </div>`)
    
}

function isEmpty(ob){
   for(var i in ob){ return false;}
  return true;
}


    

