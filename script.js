'use strict';

const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

const geolocation = navigator.geolocation.watchPosition(
  data => {
    speed.textContent = data.coords.speed;
    arrow.style.transform = `rotate(${data.coords.heading}deg)`;
  },
  err => {
    console.error('HEY! YOU GOTTA ALLOW THAT TO HAPPEN!!!');
  }
);
