// main.js

// TODO

//Volume Controls
var volume_Image = document.getElementById("volume-image");
var volume_Text = document.getElementById("volume-number");
var volume_Slider = document.getElementById("volume-slider");
var volume_Num_Value = 100;

volume_Text.addEventListener("input", changeVolumeText);
volume_Slider.addEventListener("input", changeVolumeSlider);

function changeVolumeText() {
    volume_Slider.value = volume_Text.value;
    volume_Num_Value = volume_Text.value;
    volumeImagematch(volume_Text.value);
}

function changeVolumeSlider() {
    volume_Text.value = volume_Slider.value;
    volume_Num_Value = volume_Slider.value;
    volumeImagematch(volume_Slider.value);
}

function volumeImagematch (x) {
    if(x == 0) {
        volume_Image.src = "./assets/media/icons/volume-level-0.svg";
    } else if( x >= 1 && x <= 33) {
        volume_Image.src = "./assets/media/icons/volume-level-1.svg";
    } else if(x >= 34 && x <= 66) {
        volume_Image.src = "./assets/media/icons/volume-level-2.svg";
    } else {
        volume_Image.src = "./assets/media/icons/volume-level-3.svg";
    }
}

//Sound Selection
var sound_Image = document.getElementById("sound-image");
var air_Horn_Button = document.getElementById("radio-air-horn");
var car_Horn_Button = document.getElementById("radio-car-horn");
var party_Horn_Button = document.getElementById("radio-party-horn");
var sound_Type = "./assets/media/audio/air-horn.mp3";

air_Horn_Button.addEventListener("change",changeSoundA);
car_Horn_Button.addEventListener("change", changeSoundC);
party_Horn_Button.addEventListener("change", changeSoundP);

function changeSoundA() {
    sound_Type = "./assets/media/audio/air-horn.mp3";
    sound_Image.src = "./assets/media/images/air-horn.svg"; 
}

function changeSoundC() {
    sound_Type = "./assets/media/audio/car-horn.mp3";
    sound_Image.src = "./assets/media/images/car.svg";
}

function changeSoundP() {
    sound_Type = "./assets/media/audio/party-horn.mp3";
    sound_Image.src = "./assets/media/images/party-horn.svg";
}

//Button Control
var button = document.getElementById("honk-btn");
var sound = document.getElementById("horn-sound");

button.addEventListener("click", function(event) {
    event.preventDefault();
    sound.src = sound_Type;
    sound.volume = (volume_Num_Value/100);
    sound.play();
    
});
