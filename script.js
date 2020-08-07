const video = document.querySelector('#video');
const btn = document.querySelector('#btn');

// Prompt user to select media stream, pass to video element and play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    video.srcObject = mediaStream;
    video.onloadedmetadata = () => {
      video.play();
    };
  } catch (ex) {
    alert(ex.message);
  }
}

btn.addEventListener('click', async () => {
  // Disable button
  btn.disabled = true;
  // Start PiP
  await video.requestPictureInPicture();
  // Reset button
  btn.disabled = false;
});

selectMediaStream();
