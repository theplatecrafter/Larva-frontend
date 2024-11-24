document.getElementById('submitBtn').addEventListener('click', async function(event) {
  const userInput = document.getElementById('userInput').value;
  const response = await fetch('https://your-backend-url/calculate', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ input: userInput }),
  });

  const data = await response.json();
  document.getElementById('result').innerText = `Result: ${data.result}`;
});
