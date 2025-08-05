// script.js

// Wait for the entire page content to load before running the script
document.addEventListener('DOMContentLoaded', () => {

    // --- CURTAIN LOGIC ---
    const curtain = document.getElementById('curtain');
    const beginButton = document.getElementById('begin-button');
    const mainContent = document.getElementById('main-content');
    const backgroundMusic = document.getElementById('background-music');

    if (curtain && beginButton && mainContent && backgroundMusic) {
        beginButton.addEventListener('click', () => {
            backgroundMusic.volume = 0.3;
            backgroundMusic.play().catch(error => {
                console.log("Music autoplay was prevented.", error);
            });
            curtain.classList.add('fade-out');
            mainContent.classList.add('visible');
            curtain.addEventListener('transitionend', () => {
                curtain.style.display = 'none';
            });
        });
    } else {
        console.error("One or more curtain elements are missing from the HTML.");
    }

    // --- CONSTELLATION & MODAL LOGIC ---
    const memories = [
        { title: "Our First Connection", story: " October 5th, 5:39 PM It was then, in the quiet glow of early evening, that our voices met for the very first time. A simple call—about APPAR and DEB ID for Amity— but, in that conversation, something gentle sparked. Two strangers, sharing words as friends, laying the first stones on a path that might become a beautiful story of warmth, understanding, and trust.", image: "../Images/Memory_1.png" },
        { title: "Our First Day Out", story: "November 28th, 12:30 PM We met as friends on a bright afternoon, ready for a simple adventure together. Hours passed with easy conversation and laughter, turning ordinary moments into memories. As the sun set, we found ourselves sharing soulful pav bhaji— the perfect ending to a day well spent in good company", image: "../Images/Memory_2.png" },
        { title: "Exchange Of Gifts", story: "An Unforgetable & A Beautiful Ganpati Bappa Drawing & A Special Letter Just before my Delhi Trip.", image: "../Images/Memory_3.jpeg" },
        { title: "One of the funny memory", story: "Guessing you house address, lol it was fun activity!", image: "../Images/Memory_4.jpeg" },
        { title: "Late Night Talks", story: "All those late-night talks,the deep conversations and the silly jokes— every moment we've shared means a lot to me. It’s these simple things, the laughter and understanding, that make our friendship truly special.", image: "../Images/Memory_5.jpeg" }
    ];

    const sky = document.getElementById('constellation-sky');
    const modal = document.getElementById('memory-modal');
    const closeModal = document.querySelector('.close-button');
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');
    const modalStory = document.getElementById('modal-story');

    if (sky && modal && closeModal && memories.length > 0) {
        memories.forEach((memory) => {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.top = `${Math.random() * 90 + 5}%`;
            star.style.left = `${Math.random() * 90 + 5}%`;
            star.style.animationDelay = `${Math.random() * 2}s`;
            star.addEventListener('click', () => {
                modalTitle.textContent = memory.title;
                modalImage.src = memory.image;
                modalImage.alt = memory.title;
                modalStory.textContent = memory.story;
                modal.style.display = 'block';
            });
            sky.appendChild(star);
        });
        closeModal.addEventListener('click', () => { modal.style.display = 'none'; });
        window.addEventListener('click', (event) => { if (event.target == modal) { modal.style.display = 'none'; } });
    } else {
        console.error("Constellation or modal elements are missing, or the memories array is empty.");
    }

    // --- REASON GENERATOR LOGIC ---

    // IMPORTANT: Customize this array with your own reasons!
    const sakhiReasons = [
        "...because you understand my silence.",
        "...because you are good listner.",
        "...because of our non sense talks.",
        "...because you're my Sakhi.",
        "...because you make efforts .",
        "...because you share the best memes.",
        "...because you give the most honest advice.",
        "…because our random talks can turn any day around..",
        ];

    const reasonButton = document.getElementById('reason-button');
    const reasonDisplay = document.getElementById('reason-display').querySelector('p');
    let lastReasonIndex = -1; // To avoid showing the same reason twice in a row

    if (reasonButton && reasonDisplay && sakhiReasons.length > 0) {
        reasonButton.addEventListener('click', () => {
            let randomIndex;
            // Ensure the new random reason is different from the last one
            do {
                randomIndex = Math.floor(Math.random() * sakhiReasons.length);
            } while (sakhiReasons.length > 1 && randomIndex === lastReasonIndex);
            
            lastReasonIndex = randomIndex;
            
            // Fade out the old reason, change text, then fade in
            reasonDisplay.style.opacity = 0;
            setTimeout(() => {
                reasonDisplay.textContent = sakhiReasons[randomIndex];
                reasonDisplay.style.opacity = 1;
            }, 500); // This timeout should match the CSS transition duration
        });
    } else {
        console.error("Reason generator elements are missing, or the reasons array is empty.");
    }
});
