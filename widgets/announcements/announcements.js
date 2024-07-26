document.addEventListener('DOMContentLoaded', function () {
    const announcementList = document.getElementById('announcement-list');
  
    // Fetch announcements from a hypothetical API
    fetch('https://api.example.com/announcements')
      .then(response => response.json())
      .then(data => {
        data.forEach(announcement => {
          const listItem = document.createElement('li');
          listItem.textContent = announcement.message;
          announcementList.appendChild(listItem);
        });
      });
  });
  