$(document).ready(() => {
  'use strict';

  let gameInProgress = false;

  const startGame = () => {
    gameInProgress = true;
    if ($('.boundary').hasClass('youlose')) {
      $('.boundary').removeClass('youlose');
    }
    $('#status').text('Game Started! Navigate through the maze');
  };

  const endGame = (msg) => {
    if (gameInProgress) {
      gameInProgress = false;
      $('#status').text(msg);
      alert(msg);
    }
  };

  const loseGame = () => {
    if (gameInProgress) {
      gameInProgress = false;
      $('.boundary').addClass('youlose');
      $('#status').text('Oops! You hit the boundary. Game Lost.');
      alert('Oops! You hit the boundary. Game Lost.');
    }
  };

  $('#start').click(startGame);
  $('#maze .boundary').mouseenter(loseGame);
  $('#maze').mouseleave(() => endGame('You left the battlefield! Try again.'));
  $('#end').mouseenter(() => endGame('Hurray!! You won the game.'));
});
