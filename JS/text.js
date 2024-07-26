
    // Cắt chuỗi chỉ hiển thị 100 chữ
    var noteText1 = document.getElementById("noteText-1");
    var noteText2 = document.getElementById("noteText-2");
    var noteText3 = document.getElementById("noteText-3");
    var noteText4 = document.getElementById("noteText-4");
    var noteText5 = document.getElementById("noteText-5");
    var noteText6 = document.getElementById("noteText-6");
    var noteText7 = document.getElementById("noteText-7");
    var noteText8 = document.getElementById("noteText-8");
    var noteText9 = document.getElementById("noteText-9");
    var maxCharacters = 120;
    var maxCharacter = 160;

    if (noteText1.textContent.length > maxCharacters) {
        noteText1.textContent = noteText1.textContent.substring(0, maxCharacter) + "...";
    }

    if (noteText2.textContent.length > maxCharacters) {
        noteText2.textContent = noteText2.textContent.substring(0, maxCharacters) + "...";
    }
    if (noteText3.textContent.length > maxCharacters) {
        noteText3.textContent = noteText3.textContent.substring(0, maxCharacters) + "...";
    }
    if (noteText4.textContent.length > maxCharacters) {
        noteText4.textContent = noteText4.textContent.substring(0, maxCharacters) + "...";
    }
    if (noteText5.textContent.length > maxCharacters) {
        noteText5.textContent = noteText5.textContent.substring(0, maxCharacters) + "...";
    }
    if (noteText6.textContent.length > maxCharacters) {
        noteText6.textContent = noteText6.textContent.substring(0, maxCharacters) + "...";
    }
    if (noteText7.textContent.length > maxCharacters) {
        noteText7.textContent = noteText7.textContent.substring(0, maxCharacters) + "...";
    }
    if (noteText8.textContent.length > maxCharacters) {
        noteText8.textContent = noteText8.textContent.substring(0, maxCharacters) + "...";
    }
    if (noteText9.textContent.length > maxCharacters) {
        noteText9.textContent = noteText9.textContent.substring(0, maxCharacters) + "...";
    }
