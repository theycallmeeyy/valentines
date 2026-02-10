const noBtn = document.getElementById("noBtn");
const yesBtn = document.querySelector(".yes");

let noScale = 1;
let yesScale = 1;

const messages = [
    "sure ka ba??ayaw mo sakin?🥺",
    "wehh dinga?? 😢",
    "isa pang no madadapa ka bukas sige ka 🤣",
    "awwwwwwwwwwwww.....",
    "ako na lang kaseeeeeee😡😡",
    "ayaw mo talaga sakin?😔",
    "papaasahin ka lang non pramis",
    "so dapat ako na lang",
    "please, please, please, please, please, please, please, please, please, please, please, please, please, please, please, please, please, please, please, please, please, pleaseeeeeeeeeeeeee",
     "gagawan kita ng madaming poem promisee",
     "then date usss",
     "then marry usss",
     "then have kids with usss",
     "then grow old with usss",
     "then im gonna court you in front of your parents and ask for your hand in marriage",
     "then im gonna make you the happiest woman in the world",
     "then im gonna love you forever and ever and ever and ever and ever and ever and ever and ever and ever and ever and ever and ever and ever and ever and ever and ever",
];

noBtn.addEventListener("click", () => {
    // NO gets smaller
    noScale -= 0.1;
    if (noScale < 0.4) noScale = 0.4;
    noBtn.style.transform = `scale(${noScale})`;

    // YES gets bigger
    yesScale += 0.2;
    yesBtn.style.transform = `scale(${yesScale})`;

    // Change NO text
    const index = Math.min(
        messages.length - 1,
        Math.floor((1 - noScale) * messages.length)
    );
    noBtn.textContent = messages[index];
});

function yesClicked() {
    document.body.innerHTML = `
        <div style="
            display:flex;
            justify-content:center;
            align-items:center;
            height:100vh;
            background:#fdecef;
            font-size:40px;
            color:#e91e63;
            text-align:center;
            font-family:'Comic Sans MS', cursive;
        ">
            YEHEYYYY <br> Happy Valentine’s PO!! 
                   <br>
                  I LIKE YOU A LOTT!!
        </div>
    `;
}
