const validLogins = {
    "922522106063": "Harikrishnan M",
    "922522106066": "Harris J",
    "922522106067": "Harshatha S",
    "922522106068": "Harshini K",
    "922522106069": "Hemanathan K",
    "922522106070": "Hemanthraj V",
    "922522106071": "Hirthick Sai S",
    "922522106072": "Janani K",
    "922522106073": "Javid Khan J",
    "922522106075": "Jebash Thivagar J",
    "922522106076": "Jeeva Sakthi M",
    "922522106078": "Kabilarajan S R",
    "922522106079": "Kanishka Shree K",
    "922522106080": "Karthiga V",
    "922522106081": "Karthik S",
    "922522106082": "Kavinkumar T",
    "922522106083": "Kavinraj R K",
    "922522106084": "Kaviya N",
    "922522106085": "Kiruthika M",
    "922522106086": "KishorKumar S S",
    "922522106087": "Kokila R",
    "922522106088": "Krithikesvaran R",
    "922522106089": "Lakshanya S",
    "922522106090": "Losini U",
    "922522106095": "Madhankumar T",
    "922522106091": "Manikandan S",
    "922522106094": "Manoj Kumaran V S",
    "922522106093": "Manojkumar M",
    "922522106092": "Manojkumar M",
    "922522106096": "Mohamed Ajmal A",
    "922522106097": "Moulidhar M",
    "922522106098": "Mugil R S",
    "922522106099": "Myvizhi K",
    "922522106100": "Nagadeepa S",
    "922522106101": "Nageshwari U",
    "922522106102": "Nandhini P",
    "922522106103": "Nandhini Priya S",
    "922522106104": "Navaneethakumar V",
    "922522106105": "Naveen P",
    "922522106106": "Naveenkumar S",
    "922522106107": "Nazreen Fathima J",
    "922522106108": "Nidhisha R V",
    "922522106109": "Nirmal Kumar S",
    "922522106110": "Nisha P",
    "922522106111": "Nisha Vincy A",
    "922522106112": "Nithya Shree M",
    "922522106113": "Pandiselvam R",
    "922522106114": "Parkavi K",
    "922522106115": "Poongavi S",
    "922522106116": "Prasanth A",
    "922522106117": "Prasanth P",
    "922522106118": "Praveen M",
    "922522106119": "Premkumar S",
    "922522106120": "Punitha T",
    "922522106121": "Ragul A",
    "922522106122": "Ragunanthan K",
    "922522106077": "Kabilan G",
    "922522106122": "Ragunathan S"
};

const validPassword = "VSBECE";

function validateLogin() {
    const rollNumber = document.getElementById("rollNumber").value;
    const password = document.getElementById("password").value;

    if (validLogins[rollNumber] && password === validPassword) {
        document.getElementById("splash").style.display = "none";
        document.getElementById("app").style.display = "block";

        const userName = validLogins[rollNumber];
        document.getElementById("welcomeText").innerHTML = `Welcome <span style="color: green; font-weight: bold;">${userName}</span>`;
    } else {
        alert("Invalid Roll Number or Password");
    }
}

const vocabularyData = [
    {
        day: 7,
        words: [
            { word: "Prudent", tamil: "விசாரமான", meaning: "Acting with care and thought" },
            { word: "Obfuscate", tamil: "குழப்பம் செய்ய", meaning: "To deliberately make something unclear" },
            { word: "Magnanimous", tamil: "தாராள மனம்", meaning: "Generous in forgiving" },
            { word: "Soporific", tamil: "தூக்கத்தை தூண்டும்", meaning: "Inducing sleep" },
            { word: "Untenable", tamil: "நிலைக்க முடியாத", meaning: "Not defensible" }
        ],
        sentences: [
            "The investor made a **prudent** decision to diversify assets.",
            "Some politicians **obfuscate** facts to avoid accountability.",
            "She was **magnanimous** in victory, praising her opponent.",
            "The lecture was so **soporific** that half the audience dozed off.",
            "The outdated security system became **untenable** against modern threats."
        ],
        news: {
            content: "Quantum computing is rapidly advancing and presents both promising opportunities and significant challenges. While this cutting-edge technology promises to solve complex problems beyond the reach of classical computing, it raises untenable threats to traditional encryption methods that secure digital communications today. Experts are emphasizing the need for prudent strategies to protect sensitive data and adopt advanced cryptographic solutions.",
            imageUrl: "https://endertech.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Ffswbkokbwqb5%2F4vBAsCbQ9ITwI7Ym0MtXgY%2F96c4ec25d505f1b702f46a5a3d9dbe77%2FAI-Article-00.png&w=3840&q=75",
            imageAlt: "Quantum computing visualization"
        }
    },
    {
        day: 8,
        words: [
            { word: "Benevolent", tamil: "இரக்கமுள்ள", meaning: "Well-meaning and kindly" },
            { word: "Cacophony", tamil: "குரல் கைப்பு", meaning: "A harsh mixture of sounds" },
            { word: "Indelible", tamil: "அழிக்க முடியாத", meaning: "Impossible to remove or forget" },
            { word: "Superfluous", tamil: "அவசியமற்ற", meaning: "Unnecessary, excessive" },
            { word: "Voracious", tamil: "மிகுந்த ஆர்வம்", meaning: "Having a great appetite" }
        ],
        sentences: [
            "His **benevolent** act of charity helped many families.",
            "The city was filled with the **cacophony** of traffic horns.",
            "The accident left an **indelible** mark on his memory.",
            "He provided a **superfluous** amount of details in his explanation.",
            "She is a **voracious** reader, finishing multiple books a week."
        ],
        news: {
            content: "As artificial intelligence (AI) continues to disrupt industries, superfluous manual tasks are being eliminated, creating a more streamlined workflow. AI-powered productivity tools act as benevolent assistants, enhancing efficiency and accuracy across various sectors. However, this rapid adoption raises concerns about job displacement and the need for upskilling workers to remain competitive.",
            imageUrl: "https://example.com/ai-productivity-tools-image.jpg",
            imageAlt: "AI enhancing productivity"
        }
    }
];

function loadContent() {
    const now = new Date();
    const dayIndex = (now.getDate() - 1) % vocabularyData.length;
    const todayData = vocabularyData[dayIndex];

    const wordsList = document.getElementById("words-list");
    wordsList.innerHTML = "";
    todayData.words.forEach(word => {
        const listItem = document.createElement("li");
        listItem.className = "list-group-item";
        listItem.textContent = `${word.word} (${word.tamil}): ${word.meaning}`;
        wordsList.appendChild(listItem);
    });

    document.getElementById("tech-news").textContent = todayData.news.content;

    const newsImage = document.getElementById("news-image");
    if (todayData.news.imageUrl) {
        newsImage.src = todayData.news.imageUrl;
        newsImage.alt = todayData.news.imageAlt || "Technology News Image";
        newsImage.style.display = "block";
    } else {
        newsImage.style.display = "none";
    }

    const unlockTimer = document.getElementById("unlock-timer");
    const sentencesList = document.getElementById("sentences-list");

    const nowHour = now.getHours();
    const nowMinute = now.getMinutes();
    const nowSecond = now.getSeconds();
    const unlockTime = 17; // 5 PM

    if (nowHour >= unlockTime) {
        unlockTimer.textContent = "Sentence Formation is now unlocked!";
        sentencesList.innerHTML = "";
        todayData.sentences.forEach(sentence => {
            const listItem = document.createElement("li");
            listItem.className = "list-group-item";
            listItem.innerHTML = sentence.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"); // Highlight words
            sentencesList.appendChild(listItem);
        });
    } else {
        const remainingHours = unlockTime - nowHour - 1;
        const remainingMinutes = 59 - nowMinute;
        const remainingSeconds = 59 - nowSecond;
        unlockTimer.textContent = `Unlocks in ${remainingHours}h ${remainingMinutes}m ${remainingSeconds}s.`;
        sentencesList.innerHTML = "";
    }
}

setInterval(loadContent, 1000);
loadContent();
