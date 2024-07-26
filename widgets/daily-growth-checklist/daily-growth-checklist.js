document.addEventListener('DOMContentLoaded', function () {
    const checklist = document.getElementById('checklist');
    const newItemInput = document.getElementById('new-item');
    const addItemButton = document.getElementById('add-item');
  
    addItemButton.addEventListener('click', function () {
      const newItemText = newItemInput.value.trim();
      if (newItemText !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = newItemText;
        checklist.appendChild(listItem);
        newItemInput.value = '';
      }
    });
  });
  