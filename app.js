"use strict"

function generateRandomName() {
    const names = [
      "Abdi",
      "Alfi",
      "Andrea",
      "Brett",
      "Daniel",
      "Donny",
      "Jarnesca",
      "Jesus",
      "Kaaliyah",
      "Kadi",
      "Kayla",
      "Leslie",
      "Lupe",
      "Maximo",
      "Monce",
      "Niran",
      "Remsey",
      "Rene",
      "Sabrina",
      "Uriel",
      "Victor",
    ];
  
    // Randomly select a name
    const index = Math.floor(Math.random() * names.length);
  
    document.getElementById("displayName").innerHTML = names[index];
  }
