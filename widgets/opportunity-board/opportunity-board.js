// opportunity-board.js

document.addEventListener('DOMContentLoaded', function() {
    const opportunityList = document.getElementById('opportunity-list');
    const addButton = document.getElementById('add-opportunity');

    // Load opportunities from Chrome storage
    function loadOpportunities() {
        chrome.storage.sync.get(['opportunities'], function(result) {
            console.log('Loaded opportunities:', result.opportunities); // Debugging
            const opportunities = result.opportunities || [];
            opportunityList.innerHTML = opportunities.map(opp => `
                <div class="opportunity-item">
                    <h3>${opp.title}</h3>
                    <p>${opp.description}</p>
                    <a href="${opp.link}" target="_blank">Learn More</a>
                </div>
            `).join('');
        });
    }

    // Add a new opportunity
    function addOpportunity() {
        const title = prompt('Enter the opportunity title:');
        const description = prompt('Enter the opportunity description:');
        const link = prompt('Enter the opportunity link:');

        if (title && description && link) {
            chrome.storage.sync.get(['opportunities'], function(result) {
                const opportunities = result.opportunities || [];
                opportunities.push({ title, description, link });
                chrome.storage.sync.set({ opportunities: opportunities }, function() {
                    console.log('Opportunities saved:', opportunities); // Debugging
                    loadOpportunities();
                    alert('Opportunity added successfully!');
                });
            });
        } else {
            alert('All fields are required.');
        }
    }

    // Ensure button click is properly handled
    if (addButton) {
        addButton.addEventListener('click', addOpportunity);
    } else {
        console.error('Add Opportunity button not found.'); // Debugging
    }

    loadOpportunities();
});
