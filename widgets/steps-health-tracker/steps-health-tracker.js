document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('steps-form');
    const stepsSummary = document.getElementById('steps-summary');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      const steps = document.getElementById('steps').value;
  
      // Post steps data to a hypothetical API
      fetch('https://api.example.com/steps', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ steps: steps })
      })
      .then(response => response.json())
      .then(data => {
        alert('Steps submitted successfully');
        stepsSummary.textContent = `You have walked ${data.totalSteps} steps today.`;
      });
    });
  });
  