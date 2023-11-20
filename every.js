const imagePaths = [
    "./images/INE 프로필 사진.png",
    "./images/징버거 프로필 사진.png",
    "./images/릴파 프로필 사진.png",
    "./images/이세계 아이돌 주르르 프로필.jpg",
    "./images/고세구 프로필 사진.png",
    "./images/비챤 프로필 사진.png" 
  ]; 
  let currentImageIndex = 0; 
  
  const imageElement = document.getElementById("slider-image");
  let intervalID; 
  
  function showImage(index) {
    if (index < 0) {
      currentImageIndex = imagePaths.length - 1;
    } else if (index >= imagePaths.length) {
      currentImageIndex = 0;
    }
    imageElement.src = imagePaths[currentImageIndex];
  }
  
  function prevImage() {
    currentImageIndex--;
    showImage(currentImageIndex);
    restartInterval();
  }
  
  function nextImage() {
    currentImageIndex++;
    showImage(currentImageIndex);
    restartInterval();
  }
  
  function restartInterval() {
    clearInterval(intervalID); 
    intervalID = setInterval(nextImage, 2000);
  }
  
  restartInterval();