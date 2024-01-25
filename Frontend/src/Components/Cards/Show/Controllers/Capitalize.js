export const capitalizate = (element) => {
    let newWord = "";
    element.split(" ").map((word) => {
        try {
            newWord += word[0].toUpperCase() + word.substring(1, word.length) + " ";
        } catch (error) { }
    });

    newWord = newWord.trim();
    return newWord;
};
