document.getElementById('calculate').addEventListener('click', function () {
  const weeksInput = document.getElementById('weeks');
  const resultDiv = document.getElementById('result');

  const weeks = parseInt(weeksInput.value);
  if (!isNaN(weeks)) {
    const today = new Date();
    const futureDate = new Date(today);
    futureDate.setDate(today.getDate() + weeks * 7);

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = futureDate.toLocaleDateString('en-US', options);

    resultDiv.textContent = `Date ${weeks} weeks from today: ${formattedDate}`;
  } else {
    resultDiv.textContent = 'Please enter a valid number of weeks.';
  }
});
