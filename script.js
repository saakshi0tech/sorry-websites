const slides = [
    {
        heading: "Hey My Favourite Person! 🥺",
        message: "I have something special to tell you..."
    },
    {
        heading: "I Am Sorry ❤️",
        message: "I know I made a mistake. Please forgive me."
    },
    {
        heading: "You Are my bacchaa 💗",
        message: "You mean a lot to me. I promise me pakka vo sb dubara nhi bolugii pakkaaa ."
    },
    {
        heading: "One More Thing 🥹",
        message: " u means everythinhg for me ."
    },
    {
        heading: "Please Forgive Me? 💕",
        message: " please maaff krde yrrr hojtii h galti ajata h gussaa babyyyy soryyyyy"
    }
];

let currentSlide = 0;

function nextSlide() {
    currentSlide++;

    if (currentSlide < slides.length) {
        document.getElementById("heading").innerText =
            slides[currentSlide].heading;

        document.getElementById("message").innerText =
            slides[currentSlide].message;

        if (currentSlide === slides.length - 1) {
            document.getElementById("nextBtn").innerText =
                "I Forgive You ❤️";
        }
    } else {
        document.getElementById("heading").innerText =
            "Yayyy! 🥹❤️";

        document.getElementById("message").innerText =
            "Sending you lots of happiness and love! 💗";

        document.getElementById("nextBtn").style.display = "none";
    }
}