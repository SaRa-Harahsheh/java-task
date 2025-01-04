/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/

function tellFortune(X,Y,Z,N) {
  console.log("You will be a", X,"in",Y ,",and married to " ,Z, "with",N, "kids.")  
}
tellFortune('artist', 'Jordan', 'Alice', 3);


/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/

function calculateDogAge(NN) {
    console.log("Your doggie is",NN,"years old in dog years!")
   
    
}
calculateDogAge(1*7);


/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/


function calculateSupply(age,amountPerDay) {
   maxAge=100;
remaining = maxAge-age;
total= remaining*365*amountPerDay;
    console.log("You will need", total ,"to last you until the ripe old age of ",maxAge)
}
calculateSupply(25, 2);



/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/
function greet(name) {
    console.log(`Hello ${name}`  )
    
}
greet("sara");