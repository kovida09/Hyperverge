document.addEventListener('DOMContentLoaded', function () {
    const iframe = document.querySelector('.google-slides iframe');
  
    // Check if the iframe is loaded
    iframe.addEventListener('load', function() {
      console.log('Google Slides embedded successfully');
    });
  
    // Additional functionality can be added here
    // For example, you can add custom controls to navigate slides
    const nextSlideButton = document.createElement('button');
    nextSlideButton.textContent = 'Next Slide';
    nextSlideButton.style.display = 'block';
    nextSlideButton.style.margin = '10px auto';
    nextSlideButton.addEventListener('click', function() {
      iframe.contentWindow.postMessage('{"event":"command","func":"next","args":""}', '*');
    });
  
    const prevSlideButton = document.createElement('button');
    prevSlideButton.textContent = 'Previous Slide';
    prevSlideButton.style.display = 'block';
    prevSlideButton.style.margin = '10px auto';
    prevSlideButton.addEventListener('click', function() {
      iframe.contentWindow.postMessage('{"event":"command","func":"previous","args":""}', '*');
    });
  
    document.querySelector('.widget.google-slides').appendChild(prevSlideButton);
    document.querySelector('.widget.google-slides').appendChild(nextSlideButton);
  });
  