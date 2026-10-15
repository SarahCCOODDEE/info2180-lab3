document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('#board > div');
  const status = document.getElementById('status');
  const newGameBtn = document.querySelector('.btn');

  squares.forEach(sq => sq.classList.add('square'));
});
