function exc11(n){

    let totalSum = 0;
    let oddNumber = 1;

   for(let i = 0; i < n; i++){

    console.log(oddNumber);

    totalSum += oddNumber;
    oddNumber += 2;
    
    
   }
   console.log("Sum: " + totalSum);
   

}
exc11(5);