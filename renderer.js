/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */

navigator.mediaDevices
  .getUserMedia({ video: true, audio: false })
  .then(function (stream) {
    const video = document.querySelector('video');
    video.srcObject = stream;
    video.onloadedmetadata = function (e) {
      video.play();
    };
  })
  .catch(function (err) {
    console.error('error:', err);
    alert(err);
  });
