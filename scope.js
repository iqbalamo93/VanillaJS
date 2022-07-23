const color = 'blue';

const returnSkyColor = () => {
let color ='red' 
  return color; // blue 
};

console.log(returnSkyColor());

///
let satellite = 'The Moon'
let galaxy = 'The Milky Way'
let stars = 'North Star'

function callMyNightSky(){
    return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}

console.log(callMyNightSky())

//blockScope

const logSkyColor = () => {
    let color = 'blue'; 
    console.log(color); // blue 
};
  logSkyColor(); // blue 
  console.log(color); // ReferenceError

//To sum up
const logSkyColor2 = () => {
    const dusk = true;
    let color = 'blue'; 
    if (dusk) {
    let color = 'pink';
      console.log(color); // pink
    }
    console.log(color); // blue 
};

console.log(color);

///
const logVisibleLightWaves = () => {
    let lightWaves = 'Moonlight';
    let region = 'The Arctic';
    // Add if statement here:
    if(region==='The Arctic'){
        
        let lightWaves = 'Northern Lights'
        console.log(lightWaves)
    }

    console.log(lightWaves);
    };

logVisibleLightWaves();