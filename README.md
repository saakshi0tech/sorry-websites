* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: linear-gradient(135deg, #ffb6c1, #ffc0cb, #ffe4e1);
    font-family: Arial, sans-serif;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container {
    background: white;
    width: 90%;
    max-width: 450px;
    padding: 45px 25px;
    border-radius: 25px;
    text-align: center;
    box-shadow: 0 10px 30px #d88a9a;
}

.heart {
    font-size: 65px;
    margin-bottom: 20px;
}

h1 {
    color: #e75480;
    margin-bottom: 20px;
}

p {
    color: #555;
    font-size: 19px;
    line-height: 1.6;
    margin-bottom: 30px;
}

button {
    background: #ff69b4;
    color: white;
    border: none;
    padding: 14px 35px;
    border-radius: 30px;
    font-size: 18px;
    cursor: pointer;
}

button:hover {
    background: #e75480;
}
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
        heading: "You Are Special 💗",
        message: "You mean a lot to me. I never want a small fight to spoil our happiness."
    },
    {
        heading: "One More Thing 🥹",
        message: "I may not be perfect, but I will always try to understand you better."
    },
    {
        heading: "Please Forgive Me? 💕",
        message: "Can we forget this fight and start smiling again?"
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
