// add whatever parameters you deem necessary
function constructNote(message, letters) {
    function makeFrequencyCounter(str) {
        const freqCounter = {}
        for (let char of str) {
            freqCounter[char] = (freqCounter[char] + 1) || 1;
        }
        return freqCounter;
    }
    const messageCounter = makeFrequencyCounter(message);
    const lettersCounter= makeFrequencyCounter(letters);

    for (let char in messageCounter) {
        if (!lettersCounter[char]) return false;
        if (messageCounter[char] > lettersCounter[char]) return false;
    }
    return true;
}

constructNote('aa', 'abc'); // false
constructNote('abc', 'dcba'); // true
constructNote('aabbcc', 'bcabcaddff'); // true