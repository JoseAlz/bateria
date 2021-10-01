const drums= new Howl({
      "src": [
        "./drums/drums.webm",
        "./drums/drums.mp3"
      ],
      "sprite": {
        "clap": [
          0,
          734.2630385487529
        ],
        "closed-hithat": [
          2000,
          552.7891156462586
        ],
        "crash": [
          4000,
          10185.260770975057
        ],
        "kick": [
          16000,
          568.91156462585
        ],
        "open-hithat": [
          18000,
          4946.0770975056685
        ],
        "snare": [
          24000,
          1248.2539682539696
        ]
      }
});

const drumkit = document.querySelector(".bateria");
function playDrum(event) {
  if (event.target.classList.contains("pad")) {
    event.preventDefault();
    let soundToPlay = event.target.dataset.sound;
    drums.play(soundToPlay);
  }
}

function setViewportHeight() {
  let vh = window.innerHeight * 0.01;
  console.log(vh);
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

setViewportHeight();
window.addEventListener("resize", () => {
  setTimeout(setViewportHeight, 100);
});

drumkit.addEventListener("click", playDrum);
drumkit.addEventListener("touchstart", playDrum);
