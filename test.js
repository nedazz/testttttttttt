var audio = new Audio('http://soundbible.com/mp3/Female_Scream_Horror-NeoPhyTe-138499973.mp3');

setTimeout(function() { boo(); }, 2000);

function boo () {
  audio.play();
}