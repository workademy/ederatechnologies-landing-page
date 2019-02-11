<template>
  <div class="logo">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 249 217" style="enable-background:new 0 0 249 217;" xml:space="preserve">
    <style type="text/css">
      .st0 {
        fill: #60b1bc;
      }

      .st1 {
        fill: #80d9e4;
      }
    </style>
    <g>
      <polygon class="st0" points="134.26,97.81 39.25,177.53 128.63,193.28 223.63,113.57  "/>
      <polygon class="st1" points="39.25,177.34 134.25,97.62 134.25,6.87 39.25,86.59  "/>
    </g>
    </svg>
  </div>
</template>

<style>
.logo {
  display: inline-block;
  animation: turn 1s linear forwards 0.1s;
  transform: rotateX(180deg);
  position: relative;
  overflow: hidden;
  height: 50px;
  width: 50px;
}
@keyframes turn {
  100% {
    transform: rotateX(0deg);
  }
}

@keyframes godown {
  100% {
    top: 180px;
  }
}

@keyframes goright {
  100% {
    left: 70px;
  }
}
</style>
