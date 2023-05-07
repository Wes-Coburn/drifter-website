function playAudio(url) {
  var promise = new Audio(url).play();

  if (promise !== undefined) {
    promise
      .then((_) => {
        // Autoplay started!
      })
      .catch((error) => {
        // Autoplay was prevented.
        // Show a "Play" button so that user can start playback.
      });
  }
}
