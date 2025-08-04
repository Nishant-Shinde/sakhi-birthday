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
        { title: "Our First Coffee", story: "I still remember how we talked for hours and it felt like only minutes had passed. This was the beginning of everything.", image: "https://placehold.co/400x300/e8a4b8/ffffff?text=Memory+1" },
        { title: "That Rainy Day", story: "We got stuck in the rain without an umbrella and just laughed it off. It's one of my favorite simple memories with you.", image: "https://placehold.co/400x300/a4e8d5/ffffff?text=Memory+2" },
        { title: "The Goa Trip", story: "Watching the sunset from the beach, knowing I had a friend like you by my side. Unforgettable.", image: "https://placehold.co/400x300/e8d5a4/ffffff?text=Memory+3" },
        { title: "Your Last Birthday", story: "Seeing you so happy on your last birthday was the best gift. Can't wait to celebrate many more!", image: "https://placehold.co/400x300/a4a4e8/ffffff?text=Memory+4" },
        { title: "Late Night Talks", story: "All those deep conversations and silly jokes shared under the stars. They mean the world to me.", image: "https://placehold.co/400x300/d5a4e8/ffffff?text=Memory+5" }
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
        "...because you make the best chai.",
        "...because of our 3 AM life talks.",
        "...because you're my biggest cheerleader.",
        "...because you can make me laugh even on a bad day.",
        "...because you share the best memes.",
        "...because you give the most honest advice.",
        "...because you're not just a friend, you're family."
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
