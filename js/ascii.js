window.onload = function () {
  'use strict';

  const animation = {
    frames: [],
    area: document.getElementById('text-area'),
    sizeInput: document.getElementById('fontsize'),
    currentFrameIndex: 0,
    numberOfFrames: 0,
    selected: '',
    turboEnabled: false,
    turboSpeed: 250,
    interval: null,

    init() {
      this.addEventListeners();
    },

    addEventListeners() {
      document.getElementById('animation').addEventListener('change', () => {
        this.selected = document.getElementById('animation').value;
        this.frames = ANIMATIONS[this.selected].split('=====\n');
      });

      document.getElementById('fontsize').addEventListener('change', () => {
        this.area.style.fontSize = this.sizeInput.value;
      });

      document.getElementById('start').addEventListener('click', () => {
        this.startAnimation();
      });

      document.getElementById('stop').addEventListener('click', () => {
        this.stopAnimation();
      });

      document.getElementById('speed').addEventListener('change', () => {
        this.turboEnabled = document.getElementById('turbo').checked;
        if (this.interval) {
          this.startAnimation();
        }
      });
    },

    displayCurrentFrame() {
      this.currentFrameIndex =
        this.currentFrameIndex < this.numberOfFrames - 1
          ? this.currentFrameIndex + 1
          : 0;
      this.area.value = this.frames[this.currentFrameIndex];
    },

    startAnimation() {
      this.currentFrameIndex = 0;
      this.numberOfFrames = this.frames.length;
      this.area.value = this.frames[this.currentFrameIndex];
      this.turboSpeed = this.turboEnabled ? 50 : 250;
      clearInterval(this.interval);
      this.interval = setInterval(
        () => this.displayCurrentFrame(),
        this.turboSpeed
      );
      this.toggleButtons(true);
    },

    stopAnimation() {
      clearInterval(this.interval);
      this.interval = null;
      this.toggleButtons(false);
    },

    toggleButtons(running) {
      document.getElementById('start').disabled = running;
      document.getElementById('animation').disabled = running;
      document.getElementById('stop').disabled = !running;
    },
  };

  animation.init();
};
