let isSelected = {
    "tic-tac-toe-field-1": 0,
    "tic-tac-toe-field-2": 0,
    "tic-tac-toe-field-3": 0,
    "tic-tac-toe-field-4": 0,
    "tic-tac-toe-field-5": 0,
    "tic-tac-toe-field-6": 0,
    "tic-tac-toe-field-7": 0,
    "tic-tac-toe-field-8": 0,
    "tic-tac-toe-field-9": 0
};

let imageToInsert = "X";
let moves = 0;

function preset(){
    for(let i=1; i<10; i++){
        document.getElementById("tic-tac-toe-field-" + i).innerText = "";
    }

    isSelected = {
        "tic-tac-toe-field-1": 0,
        "tic-tac-toe-field-2": 0,
        "tic-tac-toe-field-3": 0,
        "tic-tac-toe-field-4": 0,
        "tic-tac-toe-field-5": 0,
        "tic-tac-toe-field-6": 0,
        "tic-tac-toe-field-7": 0,
        "tic-tac-toe-field-8": 0,
        "tic-tac-toe-field-9": 0
    };

    imageToInsert = "X";
    moves = 0;

    document.getElementById("winner").innerText = "";
}

function insert(fieldId){
    if ((isSelected[fieldId] !== 0) || (moves >= 10))
        return;

    document.getElementById(fieldId).innerText = imageToInsert;
    moves++;

    if (imageToInsert === "X") {
        isSelected[fieldId] = "X";
        imageToInsert = "O";
    } else {
        imageToInsert = "X";
        isSelected[fieldId] = "O";
    }

    if (moves >= 5)
        winCheck();
}

function winCheck(){
    let isSelectedTab = Object.values(isSelected);

    for (let i = 0; i < 9; i+=3) {
        if (isSelectedTab[i] === "X" && isSelectedTab[i+1] === "X" && isSelectedTab[i+2] === "X")
            win("X");

        if (isSelectedTab[i] === "O" && isSelectedTab[i+1] === "O" && isSelectedTab[i+2] === "O")
            win("O");
    }
    for (let i = 0; i < 3; i++) {
        if (isSelectedTab[i] === "X" && isSelectedTab[i+3] === "X" && isSelectedTab[i+6] === "X")
            win("X");
        if (isSelectedTab[i] === "O" && isSelectedTab[i+3] === "O" && isSelectedTab[i+6] === "O")
            win("O");
    }

    if (isSelectedTab[0] === "X" && isSelectedTab[4] === "X" && isSelectedTab[8] === "X")
        win("X");
    if (isSelectedTab[0] === "O" && isSelectedTab[4] === "O" && isSelectedTab[8] === "O")
        win("O");

    if (isSelectedTab[2] === "X" && isSelectedTab[4] === "X" && isSelectedTab[6] === "X")
        win("X");
    if (isSelectedTab[2] === "O" && isSelectedTab[4] === "O" && isSelectedTab[6] === "O")
        win("O");
}

function win(who){
    document.getElementById("winner").innerText = "Zwycięża gracz " + who + "!!!";
    for (let i = 0; i < 10; i++) {
        isSelected["tic-tac-toe-field-" + i] = 1;
    }
}