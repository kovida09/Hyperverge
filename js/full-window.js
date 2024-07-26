

// document.addEventListener('DOMContentLoaded', function() {
//     const timerDisplay = document.getElementById('timer-display');
//     const startButton = document.getElementById('start-timer');
//     const pauseButton = document.getElementById('pause-timer');
//     const resetButton = document.getElementById('reset-timer');
//     const increaseWorkTimeButton = document.getElementById('increase-work-time');
//     const decreaseWorkTimeButton = document.getElementById('decrease-work-time');
//     const increaseBreakTimeButton = document.getElementById('increase-break-time');
//     const decreaseBreakTimeButton = document.getElementById('decrease-break-time');
//     const workTimeDisplay = document.getElementById('work-time');
//     const breakTimeDisplay = document.getElementById('break-time');
//     const musicSpotifyLink = document.getElementById('spotify-link');
//     const musicYouTubeMusicLink = document.getElementById('youtube-music-link');
//     const opportunityBoard = document.getElementById('opportunity-board');
//     const stepsCount = document.getElementById('steps-count');
//     const createSlideButton = document.getElementById('create-slide');
//     const slideGrid = document.getElementById('slide-grid');
//     const createFormButton = document.getElementById('create-form');
    
//     // Load slides and create new slide button
//     function loadSlides() {
//         const slideUrl = 'https://docs.google.com/presentation/d/1QPj5yxyKkT5N1jJJ1iP5i5D14AOlJ82aqDl2m9ZIOoQ/edit#slide=id.gc6f59039d_0_0';
//         const slideImageUrl = 'assets/images/slide2.png';
        
//         slideGrid.innerHTML = `
//             <a href="${slideUrl}" target="_blank">
//                 <img src="${slideImageUrl}" alt="Slide 2" id="slide-image">
//             </a>
//         `;
//     }

//     // Handle "Create New Slide" button click
//     if (createSlideButton) {
//         createSlideButton.addEventListener('click', function() {
//             const newSlideURL = 'https://docs.google.com/presentation/u/0/create'; // Google Slides URL to create a new slide
//             window.open(newSlideURL, '_blank');
//         });
//     }

//     // Handle "Create New Form" button click
//     if (createFormButton) {
//         createFormButton.addEventListener('click', function() {
//             const newFormURL = 'https://docs.google.com/forms/u/0/create'; // Correct URL for creating a new Google Form
//             window.open(newFormURL, '_blank');
//         });
//     }

//     // Pomodoro Timer
//     let timerInterval;
//     let workTime = 25 * 60; // 25 minutes in seconds
//     let breakTime = 5 * 60; // 5 minutes in seconds
//     let timeLeft = workTime;
//     let isWorkTime = true;

//     function formatTime(seconds) {
//         const minutes = Math.floor(seconds / 60);
//         const secs = seconds % 60;
//         return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
//     }

//     function updateTimerDisplay() {
//         timerDisplay.textContent = formatTime(timeLeft);
//     }

//     function startTimer() {
//         if (timerInterval) return;
//         timerInterval = setInterval(() => {
//             if (timeLeft <= 0) {
//                 clearInterval(timerInterval);
//                 timerInterval = null;
//                 isWorkTime = !isWorkTime;
//                 timeLeft = isWorkTime ? workTime : breakTime;
//                 startTimer(); // Automatically start the next session
//             } else {
//                 timeLeft--;
//                 updateTimerDisplay();
//             }
//         }, 1000);
//     }

//     function pauseTimer() {
//         clearInterval(timerInterval);
//         timerInterval = null;
//     }

//     function resetTimer() {
//         timeLeft = workTime;
//         isWorkTime = true;
//         updateTimerDisplay();
//         clearInterval(timerInterval);
//         timerInterval = null;
//     }

//     function updateWorkTimeDisplay() {
//         workTimeDisplay.textContent = `${Math.floor(workTime / 60)} min`;
//     }

//     function updateBreakTimeDisplay() {
//         breakTimeDisplay.textContent = `${Math.floor(breakTime / 60)} min`;
//     }

//     increaseWorkTimeButton.addEventListener('click', () => {
//         workTime += 60;
//         if (isWorkTime) timeLeft = workTime;
//         updateWorkTimeDisplay();
//         updateTimerDisplay();
//     });

//     decreaseWorkTimeButton.addEventListener('click', () => {
//         if (workTime > 60) {
//             workTime -= 60;
//             if (isWorkTime) timeLeft = workTime;
//             updateWorkTimeDisplay();
//             updateTimerDisplay();
//         }
//     });

//     increaseBreakTimeButton.addEventListener('click', () => {
//         breakTime += 60;
//         if (!isWorkTime) timeLeft = breakTime;
//         updateBreakTimeDisplay();
//     });

//     decreaseBreakTimeButton.addEventListener('click', () => {
//         if (breakTime > 60) {
//             breakTime -= 60;
//             if (!isWorkTime) timeLeft = breakTime;
//             updateBreakTimeDisplay();
//         }
//     });

//     startButton.addEventListener('click', startTimer);
//     pauseButton.addEventListener('click', pauseTimer);
//     resetButton.addEventListener('click', resetTimer);

//     updateTimerDisplay();
//     updateWorkTimeDisplay();
//     updateBreakTimeDisplay();

//     // Music Issue Tracker Links
//     if (musicSpotifyLink) {
//         musicSpotifyLink.addEventListener('click', function() {
//             window.open('https://www.spotify.com', '_blank');
//         });
//     }
//     if (musicYouTubeMusicLink) {
//         musicYouTubeMusicLink.addEventListener('click', function() {
//             window.open('https://music.youtube.com', '_blank');
//         });
//     }

//     // Opportunity Board
//     function loadOpportunityBoard() {
//         const opportunities = [
//             { title: 'Opportunity 1', description: 'Description of opportunity 1' },
//             { title: 'Opportunity 2', description: 'Description of opportunity 2' }
//         ];
        
//         if (opportunityBoard) {
//             opportunityBoard.innerHTML = opportunities.map(opp => `
//                 <div class="opportunity-item">
//                     <h3>${opp.title}</h3>
//                     <p>${opp.description}</p>
//                 </div>
//             `).join('');
//         }
//     }

//     loadOpportunityBoard();

//     // Steps/Health Tracker (Example, integrate with API if available)
//     function updateStepsCount() {
//         setInterval(() => {
//             if (stepsCount) {
//                 const currentSteps = parseInt(stepsCount.textContent, 10);
//                 stepsCount.textContent = currentSteps + 1000;
//             }
//         }, 5000);
//     }
    
//     updateStepsCount();
    
//     // Music Issue Tracker Form Submission to Google Sheets
//     const formEndpoint = 'YOUR_GOOGLE_SHEET_FORM_ENDPOINT'; // Replace with your Google Sheets form endpoint
//     const form = document.querySelector('#music-issue-tracker-widget form');
//     if (form) {
//         form.addEventListener('submit', function(event) {
//             event.preventDefault();
//             const formData = new FormData(event.target);
//             fetch(formEndpoint, {
//                 method: 'POST',
//                 body: formData
//             }).then(response => {
//                 if (response.ok) {
//                     alert('Form submitted successfully!');
//                 } else {
//                     alert('Failed to submit form.');
//                 }
//             }).catch(error => {
//                 console.error('Error:', error);
//                 alert('Error submitting form.');
//             });
//         });
//     }
    
//     // Initial load for slides
//     loadSlides();
// });

document.addEventListener('DOMContentLoaded', function() {
    // Timer Elements
    const timerDisplay = document.getElementById('timer-display');
    const startButton = document.getElementById('start-timer');
    const pauseButton = document.getElementById('pause-timer');
    const resetButton = document.getElementById('reset-timer');
    const increaseWorkTimeButton = document.getElementById('increase-work-time');
    const decreaseWorkTimeButton = document.getElementById('decrease-work-time');
    const increaseBreakTimeButton = document.getElementById('increase-break-time');
    const decreaseBreakTimeButton = document.getElementById('decrease-break-time');
    const workTimeDisplay = document.getElementById('work-time');
    const breakTimeDisplay = document.getElementById('break-time');

    // Checklist Elements
    const toggleButton = document.getElementById('toggle-tasks-button');
    const moreTasksContainer = document.getElementById('more-tasks-container');
    const addTaskButton = document.getElementById('add-task');
    const newTaskInput = document.getElementById('new-task');
    const checklist = document.getElementById('checklist');
    const moreTasksList = document.getElementById('more-tasks');

    // Music Elements
    const musicSpotifyLink = document.getElementById('spotify-link');
    const musicYouTubeMusicLink = document.getElementById('youtube-music-link');

    // Opportunity Board Element
    const opportunityBoard = document.getElementById('opportunity-board');

    // Steps/Health Tracker Element
    const stepsCount = document.getElementById('steps-count');

    // Create Slide and Form Buttons
    const createSlideButton = document.getElementById('create-slide');
    const createFormButton = document.getElementById('create-form');

    // Announcement Elements
    const announcementFormContainer = document.getElementById('announcement-form-container');
    const announcementForm = document.getElementById('create-announcement-form');
    const announcementsContainer = document.getElementById('announcements');
    const scrollDownButton = document.getElementById('scroll-down-button');
    const announcementsContent = document.getElementById('announcements-content');
    const addAnnouncementButton = document.getElementById('add-announcement-button');
    const cancelAnnouncementButton = document.getElementById('cancel-announcement-button');
    const form = document.getElementById('form-announcement');
    const addButton = document.getElementById('add-announcement-button');
    const cancelButton = document.getElementById('cancel-announcement-button');
    const announcementsList = document.getElementById('announcements-list'); // Ensure this exists


    // Daily Growth Checklist Tasks
    const additionalTasks = [
        'Attend Training Session',
        'Complete Monthly Report',
        'Prepare Presentation for Client Meeting',
        'Review Team Performance'
    ];

    // Load Slides and Create New Slide Button
    function loadSlides() {
        const slideUrl = 'https://docs.google.com/presentation/d/1QPj5yxyKkT5N1jJJ1iP5i5D14AOlJ82aqDl2m9ZIOoQ/edit#slide=id.gc6f59039d_0_0';
        const slideImageUrl = 'assets/images/slide2.png';
        const slideGrid = document.getElementById('slide-grid');
        if (slideGrid) {
            slideGrid.innerHTML = `
                <a href="${slideUrl}" target="_blank">
                    <img src="${slideImageUrl}" alt="Slide 2" id="slide-image">
                </a>
            `;
        }
    }

    // Create New Slide and Form
    function setupCreateButtons() {
        if (createSlideButton) {
            createSlideButton.addEventListener('click', function() {
                const newSlideURL = 'https://docs.google.com/presentation/u/0/create';
                window.open(newSlideURL, '_blank');
            });
        }

        if (createFormButton) {
            createFormButton.addEventListener('click', function() {
                const newFormURL = 'https://docs.google.com/forms/u/0/create';
                window.open(newFormURL, '_blank');
            });
        }
    }

    // Scroll to Announcements
    if (scrollDownButton && announcementsContent) {
        scrollDownButton.addEventListener('click', function() {
            announcementsContent.scrollIntoView({ behavior: 'smooth', block: 'end' });
        });
    }
    

    // Create and Add Announcement
    function createAnnouncement(title, content) {
        const announcementItem = document.createElement('div');
        announcementItem.className = 'announcement-item';
        announcementItem.innerHTML = `
            <h3>${title}</h3>
            <p>${content}</p>
            <button class="delete-announcement-button">Delete</button>
        `;

        // Add event listener for delete button
        announcementItem.querySelector('.delete-announcement-button').addEventListener('click', function() {
            announcementsContainer.removeChild(announcementItem);
        });

        announcementsContainer.insertBefore(announcementItem, announcementsContainer.firstChild);
    }

    // Handle Announcement Form Submission
    if (announcementForm) {
        announcementForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const title = document.getElementById('announcement-title').value.trim();
            const content = document.getElementById('announcement-content').value.trim();

            if (title && content) {
                createAnnouncement(title, content);
                announcementForm.reset(); // Clear form fields
                announcementFormContainer.style.display = 'none'; // Hide the form
            }
        });
    }

    // Show Announcement Form
    if (addAnnouncementButton) {
        addAnnouncementButton.addEventListener('click', function() {
            announcementFormContainer.style.display = 'block'; // Show the form
        });
    }

    // Cancel Announcement Form
    if (cancelAnnouncementButton) {
        cancelAnnouncementButton.addEventListener('click', function() {
            announcementFormContainer.style.display = 'none'; // Hide the form
        });
    }

    // Pomodoro Timer
    let timerInterval;
    let workTime = 25 * 60; // 25 minutes in seconds
    let breakTime = 5 * 60; // 5 minutes in seconds
    let timeLeft = workTime;
    let isWorkTime = true;

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }

    function updateTimerDisplay() {
        if (timerDisplay) {
            timerDisplay.textContent = formatTime(timeLeft);
        }
    }

    function startTimer() {
        if (timerInterval) return;
        timerInterval = setInterval(() => {
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                timerInterval = null;
                isWorkTime = !isWorkTime;
                timeLeft = isWorkTime ? workTime : breakTime;
                updateTimerDisplay(); // Update display for the new timer
                startTimer(); // Automatically start the next session
            } else {
                timeLeft--;
                updateTimerDisplay();
            }
        }, 1000);
    }

    function pauseTimer() {
        clearInterval(timerInterval);
        timerInterval = null;
    }

    function resetTimer() {
        timeLeft = workTime;
        isWorkTime = true;
        updateTimerDisplay();
        clearInterval(timerInterval);
        timerInterval = null;
    }

    function updateWorkTimeDisplay() {
        if (workTimeDisplay) {
            workTimeDisplay.textContent = `${Math.floor(workTime / 60)} min`;
        }
    }

    function updateBreakTimeDisplay() {
        if (breakTimeDisplay) {
            breakTimeDisplay.textContent = `${Math.floor(breakTime / 60)} min`;
        }
    }

    function setupTimerControls() {
        if (increaseWorkTimeButton) {
            increaseWorkTimeButton.addEventListener('click', () => {
                workTime += 60;
                if (isWorkTime) timeLeft = workTime;
                updateWorkTimeDisplay();
                updateTimerDisplay();
            });
        }

        if (decreaseWorkTimeButton) {
            decreaseWorkTimeButton.addEventListener('click', () => {
                if (workTime > 60) {
                    workTime -= 60;
                    if (isWorkTime) timeLeft = workTime;
                    updateWorkTimeDisplay();
                    updateTimerDisplay();
                }
            });
        }

        if (increaseBreakTimeButton) {
            increaseBreakTimeButton.addEventListener('click', () => {
                breakTime += 60;
                if (!isWorkTime) timeLeft = breakTime;
                updateBreakTimeDisplay();
            });
        }

        if (decreaseBreakTimeButton) {
            decreaseBreakTimeButton.addEventListener('click', () => {
                if (breakTime > 60) {
                    breakTime -= 60;
                    if (!isWorkTime) timeLeft = breakTime;
                    updateBreakTimeDisplay();
                }
            });
        }

        if (startButton) {
            startButton.addEventListener('click', startTimer);
        }

        if (pauseButton) {
            pauseButton.addEventListener('click', pauseTimer);
        }

        if (resetButton) {
            resetButton.addEventListener('click', resetTimer);
        }
    }

    // Music Links
    function setupMusicLinks() {
        if (musicSpotifyLink) {
            musicSpotifyLink.addEventListener('click', function() {
                window.open('https://www.spotify.com', '_blank');
            });
        }

        if (musicYouTubeMusicLink) {
            musicYouTubeMusicLink.addEventListener('click', function(){
            window.open('https://music.youtube.com', '_blank');
        });
    }
}

// Opportunity Board
document.addEventListener('DOMContentLoaded', function() {
    const opportunityBoard = document.getElementById('opportunity-board');
    const addOpportunityButton = document.getElementById('add-opportunity-button');
    const opportunityFormContainer = document.getElementById('opportunity-form-container');
    const opportunityForm = document.getElementById('opportunity-form');
    const cancelOpportunityButton = document.getElementById('cancel-opportunity-button');

    // Initial Opportunities
    const initialOpportunities = [
        { title: 'Volunteer for Community Outreach', description: 'Join our community outreach program and make a difference in the local area.' },
        { title: 'Organize Team Building Event', description: 'Plan and execute a team-building event to enhance team cohesion and morale.' },
        { title: 'Implement New Sustainability Initiative', description: 'Help launch a new sustainability initiative to improve our environmental impact.' },
        { title: 'Lead Project for New Product Launch', description: 'Take charge of a project to successfully launch our new product line.' },
        { title: 'Enhance Workplace Diversity Program', description: 'Work on enhancing our diversity program to foster an inclusive workplace.' }
    ];

    // Load Initial Opportunities
    function loadOpportunities() {
        if (opportunityBoard) {
            opportunityBoard.innerHTML = ''; // Clear existing opportunities
            initialOpportunities.forEach(opportunity => {
                addOpportunityToBoard(opportunity.title, opportunity.description);
            });
        }
    }

    function addOpportunityToBoard(title, description) {
        const opportunityItem = document.createElement('div');
        opportunityItem.className = 'opportunity-item';
        opportunityItem.innerHTML = `
            <h3>${title}</h3>
            <p>${description}</p>
            <button class="remove-button">Remove</button>
        `;

        // Add event listener for the remove button
        opportunityItem.querySelector('.remove-button').addEventListener('click', function() {
            opportunityBoard.removeChild(opportunityItem);
        });

        // Add the new opportunity to the top of the list
        opportunityBoard.insertBefore(opportunityItem, opportunityBoard.firstChild);
    }

    // Handle Opportunity Form Submission
    if (opportunityForm) {
        opportunityForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const title = document.getElementById('opportunity-title').value.trim();
            const description = document.getElementById('opportunity-description').value.trim();

            if (title && description) {
                addOpportunityToBoard(title, description);
                opportunityForm.reset(); // Clear form fields
                opportunityFormContainer.style.display = 'none'; // Hide the form
            }
        });
    }

    // Show Opportunity Form
    if (addOpportunityButton) {
        addOpportunityButton.addEventListener('click', function() {
            opportunityFormContainer.style.display = 'block'; // Show the form
        });
    }

    // Cancel Opportunity Form
    if (cancelOpportunityButton) {
        cancelOpportunityButton.addEventListener('click', function() {
            opportunityFormContainer.style.display = 'none'; // Hide the form
        });
    }

    // Initialize all components
    function init() {
        loadOpportunities();
    }

    init(); // Run the initialization function
});

// Steps/Health Tracker
function updateStepsCount() {
    // Placeholder function to simulate steps count updating
    setInterval(() => {
        if (stepsCount) {
            const steps = Math.floor(Math.random() * 10000); // Random number for demo
            stepsCount.textContent = `${steps} steps`;
        }
    }, 60000); // Update every minute
}

// Checklist Toggle Function
function toggleChecklist() {
    if (toggleButton && moreTasksContainer) {
        toggleButton.addEventListener('click', function() {
            if (moreTasksContainer.style.display === 'none' || moreTasksContainer.style.display === '') {
                moreTasksContainer.style.display = 'block';
                toggleButton.textContent = 'Show Less';
            } else {
                moreTasksContainer.style.display = 'none';
                toggleButton.textContent = 'Show More';
            }
        });
    }
}

// Add Task to Checklist
function setupTaskAddition() {
    if (addTaskButton && newTaskInput && checklist) {
        addTaskButton.addEventListener('click', function() {
            const newTask = newTaskInput.value.trim();
            if (newTask) {
                const taskItem = document.createElement('li');
                taskItem.textContent = newTask;
                checklist.appendChild(taskItem);
                newTaskInput.value = ''; // Clear input field
            }
        });
    }
}

// Initialize all components
function init() {
    loadSlides();
    setupCreateButtons();
    setupTimerControls();
    setupMusicLinks();
    loadOpportunityBoard();
    updateStepsCount();
    toggleChecklist();
    setupTaskAddition();
}

init(); // Run the initialization function
});
