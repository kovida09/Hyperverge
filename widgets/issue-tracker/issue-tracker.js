document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('issue-form');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const title = document.getElementById('issue-title').value;
      const description = document.getElementById('issue-description').value;
  
      // Append the issue to Google Sheets
      fetch('https://sheetdb.io/api/v1/YOUR_SHEET_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          data: [{ Title: title, Description: description }]
        })
      }).then(response => response.json())
        .then(data => {
          alert('Issue submitted successfully');
          form.reset();
        });
    });
  });
  