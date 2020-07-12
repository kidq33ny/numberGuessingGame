let count = 0
let answer = Math.floor(Math.random() * 100) + 1 // target number
guess = Math.floor(Math.random() * 100) + 1
let max = 100
let min = 1

// start coding(運作邏輯"收斂"調整)
while (true, count<=9) {
  // guess = Math.floor(Math.random() * 100) + 1

  if (guess<answer){
    console.log(`Target is ${answer}, and guess is ${guess}. The given number is not satisfied. TOO SMALL!`)

    min = (Math.floor((max-min)*0.5)+min)+1
    // guess = Math.floor((max-min)*0.5)+min
    // min = guess+1
    
  } else if(guess>answer){
    console.log(`Target is ${answer}, and guess is ${guess}. The given number is not satisfied. TOO BIG!`)
    max = (Math.floor((max-min)*0.5)+min)-1
    // guess = Math.floor((max-min)*0.5)+min
    // max = guess-1
    
  } else{
    console.log(`Target is ${answer}, and guess is ${guess}. Congratulation! YOU WIN!`)
    break
  }
count=count+1
guess = Math.floor((max-min)*0.5)+min
console.log('')
}
