document.addEventListener('DOMContentLoaded', function () {
    let timer;
    const minutesElem = document.getElementById('minutes');
    const secondsElem = document.getElementById('seconds');
    const startButton = document.getElementById('start');
    const stopButton = document.getElementById('stop');
    const resetButton = document.getElementById('reset');
    let minutes = 25;
    let seconds = 0;
  
    function updateDisplay() {
      minutesElem.textContent = String(minutes).padStart(2, '0');
      secondsElem.textContent = String(seconds).padStart(2, '0');
    }
  
    function startTimer() {
      if (timer) return;
      timer = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(timer);
            timer = null;
            alert('Pomodoro session complete!');
            return;
          }
          minutes--;
          seconds = 59;
        } else {
          seconds--;
        }
        updateDisplay();
      }, 1000);
    }
  
    function stopTimer() {
      clearInterval(timer);
      timer = null;
    }
  
    function resetTimer() {
      stopTimer();
      minutes = 25;
      seconds = 0;
      updateDisplay();
    }
  
    startButton.addEventListener('click', startTimer);
    stopButton.addEventListener('click', stopTimer);
    resetButton.addEventListener('click', resetTimer);
  
    updateDisplay();
  });
  