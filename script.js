// Import audio
const C=new Audio('notes/C4.mp3');
const Cs=new Audio('notes/Cs4.mp3');
const D=new Audio('notes/D4.mp3');
const Ds=new Audio('notes/Ds4.mp3');
const E=new Audio('notes/E4.mp3');
const F=new Audio('notes/F4.mp3');
const G=new Audio('notes/G4.mp3');
const A=new Audio('notes/A4.mp3');
const B=new Audio('notes/B4.mp3');
const Fs=new Audio('notes/Fs4.mp3');
const Gs=new Audio('notes/Gs4.mp3');
const As=new Audio('notes/As4.mp3');


// Declare Constants and variables
const allKeys = ['a', 's', 'd', 'f', 'g', 'h', 'j','w', 'e', 'r', 't', 'y'];
const note_sounds=[C,D,E,F,G,A,B,Cs,Ds,Fs,Gs,As];

// Add Event Listeners to all
document.addEventListener('keydown',playNote);

// Define Function to play notes
function playNote(e){
// Store key in some variable
pressed_key=e.key;
if(allKeys.includes(pressed_key)){
playKeyIndex=allKeys.indexOf(pressed_key)
    if(e.key.repeat){
        note_sounds[playKeyIndex].pause();
        note_sounds[playKeyIndex].currentTime = 0;
        note_sounds[playKeyIndex].play();
        console.log('event fired')
    }
    else{
        note_sounds[playKeyIndex].play();
}
}
else{
    console.log('event not fired')
}
}

