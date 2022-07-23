let options = ['rock','paper','scissors']
const getUserChoice = userInput => {
      userInput = userInput.toLowerCase()
      if(options.includes(userInput)){
        return userInput
      }
      else{
        return false
      }
}

const getComputerChoice = () =>{
    let choice = options[Math.floor(Math.random()*3)]
    return choice
}

//let values =new Array(10).fill().map(()=>options[Math.floor(Math.random()*3)])

let values = new Array(10).fill(0).map(getComputerChoice)

console.log(values)

const determineWinner = (user= getUserChoice(), comp=getComputerChoice()) =>{
    if (user===comp){
        return 'tie'
    }
    else if(user==='rock'){
        if(comp==='paper'){return 'Comp Won'}
        return 'User Won'  
    }
    else if(user==='paper'){
            if(comp=='scissors'){return 'Comp Won'}
            return  'User Won' 
    }
    else if(user==='scissors'){
        if(comp=='rock'){return 'Comp Won'}
        return  'User Won' 
    }
}



console.log(determineWinner('rock','scissors'))