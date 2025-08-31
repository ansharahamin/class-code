// shop =["milk","bread","eggs","juice"]
// for (var i=0;i<shop.length;i++){
//     alert(shop[i])
// }
// var add = prompt("enter another item: ")||"cake"
// shop.push(add)
// alert(shop)


// ATM Machine

var balance = 10000000


for (var i =0;i<100;i++){
    var choice = +prompt(
    "ATM menu : \n" +
    "1-> check balance:\n"+
    "2-> Deposit:\n"+
    "3-> Withdraw:\n"+
    "4-> Exit:\n"
)

    if (choice === 1){
        alert("Your Balnce is Rupees : " + balance)
    }else if(choice ===2){
        deposit = +prompt("Enter Amount to deposit")
        if(deposit>0){
            balance +=deposit 
            alert("Deposit Successfull now your balance is Rupees : "+ balance)
        }else{
            alert("invalid Amount!!")
        }
    }else if(choice ===3){
        withdraw = +prompt("Enter Amount to withdraw")
        if(withdraw>0 && withdraw<=balance){
            balance -=withdraw 
            alert("withdraw Successfull now your balance is Rupees : "+ balance)
        }else{
            alert("invalid Amount!!" )
        }
    }else if(choice===4){
        alert("Thank you for using the ATM Goodbye!!")
        break;
    }else{
        alert("invalid choice... Try Again!!")
    }
   
}