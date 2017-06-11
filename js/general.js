
function sendReply(){
//    $('.bot-container').addClass('isActive')
    console.log(simplifiedJSON(user));
    $('.center_body').append(`
    <div class="user-container">
    <p class="user-reply">`+$('.message_input').val()+`</p><div class="user-pic"></div></div>`)
    setTimeout(botReply,1000,$('.message_input').val())
    $('.message_input').val("") 
    ScrollToBottom()
    
}

$('.table').mounTable(simplifiedJSON(user),{
  model: '.mountable-model'
});


var botReply = function botReply(text){
    console.log(text)
    if(isEmpty(queue)!=true){
        if(queue.ddtbalance!=undefined){
            if(queue.ddtbalance.item==undefined){   
                budgetText=deductBalance(text)
            }
        }
        else if(queue.updateBudget!=undefined){
            if(queue.updateBudget.confirm===undefined){
                budgetText=updateBudget(text)
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
    
    else if(text.split(" ")[0].toLowerCase()==="update"){
        if(user.Budget===undefined){
            budgetText="You dont have a budget yet!"
        }
        
        else{ 
            budgetText=updateBudget(text)
        }
        
    }
     $('.center_body').append(`
        <div class="bot-container">
            <div class="bot-pic"></div>
            <p class="bot-reply">`+budgetText+`<p>
        </div>`)
    ScrollToBottom()
}

function isEmpty(ob){
   for(var i in ob){ return false;}
  return true;
}

function ScrollToBottom(){
       var d = document.getElementById("appendIn");
       d.scrollTop = d.scrollHeight;
       }

function netDeduction(){
    var netamt = 0;
    for(var key in user.date){
        for(var item in user.date[key]){
            
                 netamt = netamt+user.date[key][item].deduct;
        }
                           
                        
                        }
    return netamt;
}


    

