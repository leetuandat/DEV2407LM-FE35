function rotateRight(hand) {
  let elements = hand.textContent.split('|');
  const lastElement = elements.pop(); // Remove the last element
  elements.unshift(lastElement); // Insert it at the beginning
  hand.textContent = elements.join('|');
}

function decrement(hand) {
  let elements = hand.textContent.split('|').map(Number);
  elements = elements.map(digit => (digit - 1 < 0 ? 59 : digit - 1)); // Decrement each number, wrapping correctly
  hand.textContent = elements.join('|');
}

function updateClock() {
  const hourHand = document.getElementById('hour');
  const minuteHand = document.getElementById('minute');
  const secondHand = document.getElementById('second');

  // Rotate first then decrement to simulate each tick behavior
  rotateRight(hourHand);
  rotateRight(minuteHand);
  rotateRight(secondHand);

  decrement(hourHand);
  decrement(minuteHand);
  decrement(secondHand);
}

setInterval(updateClock, 1000);
updateClock(); // Initial call to set the clock immediately
