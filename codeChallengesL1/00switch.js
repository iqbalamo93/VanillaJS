// Write your function here:
const calculateWeight = (earthWeight ,planet) =>{
switch(planet){
        case 'Mercury':
            return 0.378 * earthWeight
        case 'Venus':
            return earthWeight * 0.907
        case 'Mars':
            return earthWeight * 0.377
        case 'Jupiter':
            return earthWeight * 2.36
        case 'Saturn':
            return earthWeight * 0.916
        default:
            return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'

}

}


// Uncomment the line below when you're ready to try out your function
console.log(calculateWeight(100, 'Jupiter')) // Should print 236