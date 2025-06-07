function rollDice() {
  const dice1 = Math.floor(Math.random() * 6) + 1;
  const dice2 = Math.floor(Math.random() * 6) + 1;
  const dice3 = Math.floor(Math.random() * 6) + 1;

  document.getElementById('dice1').textContent = getDiceEmoji(dice1);
  document.getElementById('dice2').textContent = getDiceEmoji(dice2);
  document.getElementById('dice3').textContent = getDiceEmoji(dice3);

  const total = dice1 + dice2 + dice3;
  const result = (total >= 11 && total <= 17) ? 'Tài' : 'Xỉu';
  document.getElementById('result-text').textContent = `Kết quả: ${total} điểm ➜ ${result}`;
}

function getDiceEmoji(num) {
  const diceEmojis = ["", "⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
  return diceEmojis[num];
}