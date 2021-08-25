/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

 let sumCount = 0;
 let sumNum = 0;

 let bills = [];
 var coinChange = function(coins, amount) {
     
     if (amount === 0)
         return amount;
     
     if (coins.every(x => x > amount))
         return -1;
     
     const someEqual = coins.some(x => x === amount);
     if (someEqual)
         return 1;
     
     const orderred = orderByDesc(coins);
     for(const num of orderred) {
        sumUntil(num, amount);   
     }
    if (sumNum === amount)
        return sumCount
    else
        return -1; 
 };
 
 
 function sumUntil(num, target) {
    const sum = sumNum + num;
    if (sum > target)
        return false;
    else if (sumNum <= target) {
        bills.push(num);
        sumNum = sum;
        sumCount++;
        return sumUntil(num, target);  
    }
 } 
 
 function orderByDesc(coins) {
    return coins.reverse();
 }



 coinChange([1, 5, 10, 20, 50, 100], 195)

 console.log(bills);