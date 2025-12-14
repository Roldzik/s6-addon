function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  // Ustawianie losowych rozmiarów płatków śniegu
  const size = Math.random() * 10 + 5 + 'px';
  snowflake.style.width = size;
  snowflake.style.height = size;
  // Ustawianie losowej pozycji na osi X
  snowflake.style.left = Math.random() * window.innerWidth + 'px';
  // Ustawianie losowej prędkości animacji
  snowflake.style.animationDuration = Math.random() * 5 + 6 + 's';
  // Dodanie płatka do kontenera
  document.getElementById('snow-container').appendChild(snowflake);
  // Usunięcie płatka po zakończeniu animacji
  setTimeout(() => {
    snowflake.remove();
  }, 8000);
}
// Tworzenie płatków co 100 ms
setInterval(createSnowflake, 200);