document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('#board > div');
  const status = document.getElementById('status');
  const newGameBtn = document.querySelector('.btn');
  const originalMessage = status.textContent;

  // Exercise 1
  squares.forEach(sq => sq.classList.add('square'));

  // Exercise 2: game state
  let state = Array(9).fill(null);
  let currentPlayer = 'X';
  let gameOver = false;

  // Exercise 4: winning combinations
  const lines = [
    [0,1,2],[3,4,5],[6,7,8],   // rows
    [0,3,6],[1,4,7],[2,5,8],   // columns
    [0,4,8],[2,4,6]            // diagonals
  ];

  function checkWinner() {
    for (const [a, b, c] of lines) {
      if (state[a] && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return null;
  }

  squares.forEach((sq, i) => {
    // Exercise 2 and 6: click handling
    sq.addEventListener('click', () => {
      if (gameOver || state[i] !== null) return;

      state[i] = currentPlayer;
      sq.textContent = currentPlayer;
      sq.classList.add(currentPlayer);

      // Exercise 4: check for a winner
      const winner = checkWinner();
      if (winner) {
        status.textContent = `Congratulations! ${winner} is the Winner!`;
        status.classList.add('you-won');
        gameOver = true;
        return;
      }

      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    });

    // Exercise 3: hover effect
    sq.addEventListener('mouseover', () => sq.classList.add('hover'));
    sq.addEventListener('mouseout', () => sq.classList.remove('hover'));
  });
});
