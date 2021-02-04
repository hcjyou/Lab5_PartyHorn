// main.js

// TODO

//Volume Controls
var volume_Image = document.getElementById("volume-image");
var volume_Text = document.getElementById("volume-number");
var volume_Slider = document.getElementById("volume-slider");
var volume_Num_Value = document.getElementById("horn-sound").volume;

volume_Text.addEventListener("input", changeVolumeText);
volume_Slider.addEventListener("input", changeVolumeSlider);

function changeVolumeText() {
  volume_Slider.value = volume_Text.value;
  volume_Num_Value = volume_Text.value;

  volumeImagematch(volume_Text.value);
}

function changeVolumeSlider() {
    volume_Text = volume_Slider.value;
    volume_Num_Value = volume_Slider.value;

    volumeImagematch(volume_Slider.value);
}

function volumeImagematch (x) {
    if(x == 0) {
        volume_Image.src = "./assets/media/icons/volume-level-0.svg";
    }
    else if( 1 <= x <= 33) {
        volume_Image.src = "./assets/media/icons/volume-level-1.svg";
    }

    else if(34 <= x <= 66) {
        volume_Image.src = "./assets/media/icons/volume-level-2.svg";
    }

    else {
        volume_Image.src = "./assets/media/icons/volume-level-3.svg";
    }
}

//Sound Selection
var sound_Type = document.getElementById("horn-sound").src;
var air_Horn_Button = document.getElementById("radio-air-horn");
var car_Horn_Button = document.getElementById("radio-car-horn");
var party_Horn_Button = document.getElementById("radio-party-horn");

air_Horn_Button.addEventListener("input",changeSoundA);
car_Horn_Button.addEventListener("input", changeSoundC);
party_Horn_Button.addEventListener("input", changeSoundP);

function changeSoundA() {
    sound_Type = "./assets/media/audio/air-horn.mp3"; 
}

function changeSoundC() {
    sound_Type = "./assets/media/audio/car-horn.mp3";
}

function changeSoundP() {
    sound_Type = "./assets/media/audio/party-horn.mp3";
}

//Button Control
var button = document.getElementById("honk-btn");
var sound = document.getElementById("horn-sound");

button.addEventListener("click", playSound);

function playSound() {
    sound.play();    
}
