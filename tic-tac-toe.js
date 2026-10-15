document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('#board > div');
  const status = document.getElementById('status');
  const newGameBtn = document.querySelector('.btn');


  squares.forEach(sq => sq.classList.add('square'));


  let state = Array(9).fill(null);
  let currentPlayer = 'X';

  squares.forEach((sq, i) => {
    sq.addEventListener('click', () => {
      if (state[i] !== null) return;   // Exercise 6: square already taken

      state[i] = currentPlayer;
      sq.textContent = currentPlayer;
      sq.classList.add(currentPlayer); // adds class "X" or "O"

      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    });
  });
});
