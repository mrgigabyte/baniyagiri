var queue={};   
function setBudget(text){
   user.Budget=parseInt(text);
}

function deductBalance(text){
    var bgtxt;
    var currentDate = Date().split(" ").splice(1,3).join(" ");
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
        if (!user.date[currentDate]) {
            user.date[currentDate] = {};
        }
        user.date[currentDate].push({"deduct":parseInt(amount),"reason":item})
        console.log(user)
        bgtxt="So you have spent: "+amount+" on "+item+" Remaining balance is now: "+ user.Budget-netDeduction()
     }
    
    else{
        bgtxt="Invalid Argument!"
     }
    console.log(bgtxt)
    return bgtxt;
}
