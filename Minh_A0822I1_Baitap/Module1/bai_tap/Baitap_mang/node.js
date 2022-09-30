function () {
    let englishWord = ["Hello", "GoodMorning", "Goodbye"];

    function f1(course1) {
        return course1 == englishWord[0];
    }

    let newWord = englishWord.filter(f1)
    console.log(newWord);


    let vietnamWord = ["XinChào", "Chàobuổisáng", "TạmBiệt"];

    function f2(course2) {
        return course2 == vietnamWord[0];
    }

    let newWord2 = vietnamWord.filter(f2)
    console.log(newWord2);
}

