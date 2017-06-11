var user = {
    "Budget":5000,
    "date":{
            "Jan 11 2017":[{
                            "deduct":100,
                            "reason": "pizza"
                        }],
            "Feb 11 2017":[{
                            "deduct":1000,
                            "reason": "clothing"
                        }],
            "Mar 11 2017":[{
                            "deduct":50,
                            "reason": "milk"
                        }],
            "Apr 11 2017":[{
                            "deduct":70,
                            "reason": "cab"
                        }],
            "May 11 2017":[{
                            "deduct":120,
                            "reason": "beer"
                        }],
            "Jun 11 2017":[{
                            "deduct":20,
                            "reason": "tea"
                        },
                          {
                            "deduct":120,
                            "reason": "veggies"
                        }]   
    }
}

var user1=[];

function simplifiedJSON(user){
    for(var i in user.date){
        for(var j in user.date[i])
            user1.push({
                "date": i,
                "deduct":user.date[i][j]["deduct"],
                "reason":user.date[i][j]["reason"]
    })}
    return user1;
}