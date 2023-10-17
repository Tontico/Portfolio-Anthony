
// Sélectionnez tous les éléments avec la classe "circle-progress" et "progress-value"
let circleProgressElements = document.querySelectorAll(".circle-progress");
let progressValueElements = document.querySelectorAll(".progress-value");

let targetValue = [80,70,60,40,40,60];
let speed = 30;

// Parcourez tous les éléments et animez-les individuellement
circleProgressElements.forEach((circleProgress, i) => {
  let progressStartValue = 0;
  let progressValue = progressValueElements[i] ;
  let currentEndValue = targetValue[i];
  console.log(progressValue);
 

  let progress = setInterval(() => {
    progressStartValue++;
    progressValue.textContent = `${progressStartValue}%`;
    circleProgress.style.background = `conic-gradient(orangered ${progressStartValue * 3.6}deg, white 0deg)`;
    if (progressStartValue === currentEndValue) {
      clearInterval(progress);
    }
  }, speed);
});




