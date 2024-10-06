const nextMessageButton = document.getElementById('nextMessageButton');
const letterElement = document.getElementById('letter');
const loveSong = document.getElementById('loveSong');

const messages = [
    {
        text: "You light up my life with your presence. I’m so grateful for you.",
        audio: "song1.mp3"
    },
    {
        text: "Every moment with you feels like a beautiful dream come true.",
        audio: "song2.mp3"
    },
    {
        text: "Thank you for being the love of my life and my forever partner.",
        audio: "song3.mp3"
    },
    {
        text: "With you, I am my happiest, truest self. I love you so much.",
        audio: "song4.mp3"
    },
    {
        text: "Each day with you is a new blessing. Thank you for being my everything.",
        audio: "song5.mp3"
    }
];

let currentMessageIndex = 0;

// Function to show the next message with lateral transition
function showNextMessage() {
    // Remove the current message
    letterElement.style.opacity = '0';
    letterElement.style.left = '100%';

    setTimeout(() => {
        // Load the next message and audio
        letterElement.innerText = messages[currentMessageIndex].text;
        loveSong.src = messages[currentMessageIndex].audio;
        loveSong.play();

        // Slide the new message in
        letterElement.style.left = '0';
        letterElement.style.opacity = '1';

        // Move to the next message or loop back
        currentMessageIndex = (currentMessageIndex + 1) % messages.length;
    }, 500);
}

// Initialize the first message display
showNextMessage();

nextMessageButton.addEventListener('click', () => {
    // Stop the current audio
    loveSong.pause();
    loveSong.currentTime = 0;

    // Show the next message
    showNextMessage();
});
