var queue={};   
function setBudget(text){
   user.Budget=parseInt(text);
}

function deductBalance(text){
    var bgtxt;
    var amount=text.split(" ")[1];
    var item=text.split(" ")[2];
    if(isEmpty(queue)!=true){
        if(queue.ddtbalance!=undefined){
            if(queue.ddtbalance.item==undefined){
                item=text;
                amount=queue.ddtbalance.amount;
                console.log(item);
                queue={};
                console.log(queue);
            }
        }
    }
    console.log(item,amount,text,queue);
    if(item===undefined){
        bgtxt='Please specify the reason for balance deduction?'
        queue.ddtbalance={"item":undefined,"amount":amount}
        console.log(queue);
        return bgtxt;
    }
     if(amount!==undefined){
        console.log(amount)
        console.log(user.Budget)
        console.log(item)
        user.Budget=user.Budget-parseInt(amount)
        bgtxt="So you have spent: "+amount+" on "+item+" Remaining balance is now: "+ user.Budget
     }
    
    else{
        bgtxt="Invalid Argument!"
     }
    console.log(bgtxt)
    return bgtxt;
}
