function updateBudget(txt){
    console.log(txt); 
    console.log(queue)
    if(isEmpty(queue)!=true){
                    if(txt.toLowerCase()=="no"){
                            uptxt = "Alright no problem :)"
                        }
                    else if(txt.toLowerCase()=="yes"){
                            console.log('ok')
                            newbudgetamt = queue.updateBudget.amount;
                            console.log(newbudgetamt)
                            for(var key in user.date){
                                newbudgetamt1 = newbudgetamt;
                                newbudgetamt = newbudgetamt-user.date[key].deduct;
                        
                        }
                            console.log(newbudgetamt)
                            if (newbudgetamt>0){
                                user.Budget = newbudgetamt1;
                                queue={}
                                return "Remaining amount:"+newbudgetamt+". Your budget has been successfully updated"
                            }
                        
                            else{
                                queue={}
                                return "Your monthly expenses are more than your budget :P"
                            }
                    }
                    else{
                            return "Wrong argument"
                    }
            }
        
    else{
          txt = txt.split(" ")[1];
          if(typeof(parseInt(txt))=="number"){
                    console.log(parseInt(txt));
                    queue.updateBudget={"confirm":undefined,"amount":parseInt(txt)}
                    return "Are you sure that you want to update your budget?";
                }
           else{
                return "Sorry input be a number"; 
            }
        }
    
}