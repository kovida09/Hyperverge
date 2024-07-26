document.addEventListener('DOMContentLoaded', function () {
    const quoteDiv = document.getElementById('quote');
  
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {
        quoteDiv.innerHTML = `<p>"${data.content}" - ${data.author}</p>`;
      });
  });
  