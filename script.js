let currentMessageIndex = 0;

const messages = [
    {
        title: "Message 1",
        content: "Every time I see you, my heart skips a beat. You are the song my heart loves to sing.",
        song: "song1.mp3"  // Use the actual song files here
    },
    {
        title: "Message 2",
        content: "You are the reason my world is full of color and light. You make everything beautiful.",
        song: "song2.mp3"
    },
    {
        title: "Message 3",
        content: "In your eyes, I see my future. In your smile, I find my home.",
        song: "song3.mp3"
    },
    {
        title: "Message 4",
        content: "You are my best adventure, and I want to travel this life with you forever.",
        song: "song4.mp3"
    },
    {
        title: "Message 5",
        content: "No words can describe how you make me feel. With you, my soul finds peace and joy.",
        song: "song5.mp3"
    },
    {
        title: "Message 6",
        content: "You light up my darkest days and fill my heart with endless love.",
        song: null  // No song for message 6
    },
    {
        title: "Message 7",
        content: "From the moment I met you, I knew you were the one I'd love forever.",
        song: null  // No song for message 7
    },
    {
        title: "Message 8",
        content: "With every passing day, my love for you grows stronger, deeper, and more beautiful.",
        song: null  // No song for message 8
    },
    {
        title: "Message 9",
        content: "Your love is the rhythm of my heart, and I dance to it every day.",
        song: null  // No song for message 9
    },
    {
        title: "Message 10",
        content: "You are my dream come true, the one I have been waiting for all my life.",
        song: null  // No song for message 10
    }
];

function showNextMessage() {
    if (currentMessageIndex < messages.length - 1) {
        currentMessageIndex++;
        updateMessage();
    }
}

function showPreviousMessage() {
    if (currentMessageIndex > 0) {
        currentMessageIndex--;
        updateMessage();
    }
}

function updateMessage() {
    const messageTitle = document.getElementById('message-title');
    const messageContent = document.getElementById('message-content');
    const audioPlayer = document.getElementById('love-song');
    const prevButton = document.getElementById('previous-button');
    const nextButton = document.getElementById('next-button');

    // Display the current message
    messageTitle.textContent = messages[currentMessageIndex].title;
    messageContent.textContent = messages[currentMessageIndex].content;

    // Check if there's a song for the current message
    if (messages[currentMessageIndex].song) {
        audioPlayer.src = messages[currentMessageIndex].song;
        audioPlayer.style.display = "block";
        audioPlayer.play();
    } else {
        // Disable the song if there is no song for this message
        audioPlayer.src = "";
        audioPlayer.style.display = "none";
    }

    // Enable or disable buttons based on the current message index
    prevButton.disabled = currentMessageIndex === 0;
    nextButton.disabled = currentMessageIndex === messages.length - 1;
}

// Initialize the first message when the page loads
updateMessage();
