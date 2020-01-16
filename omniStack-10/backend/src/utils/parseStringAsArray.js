module.exports = function parseStringAsArray (texts){
    console.log('texts', texts);
    return texts.split(",").map(text => text.trim());
}