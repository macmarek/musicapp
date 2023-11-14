const keys = {};
keys["C-DUR"]=[	"c",  	"d",	"e",	"f",	"g",	"a",	"h",	"c"];
keys["D-DUR"]=[	"d",	"e",	"f#",	"g",	"a", 	"h", 	"c#",	"d"];
keys["F-DUR"]=[	"f",	"g",	"a",	"h",	"c",	"d",	"e",	"f"];
keys["G-DUR"]=[	"g",	"a",	"h",	"c",	"d",	"e",    "f#",	"g"];
keys["A-DUR"]=[	"a",	"h",	"c#",	"d",	"e",	"f#",	"g#",	"a"];

function validateFromTo(param, type) {
    if (!param){
        return {result: false, message: "missing "+type+" value"}
    }
    if (!(param in keys)){
        return {result: false, message:"invalid value for "+type+". Allowed values are C-DUR, D-DUR, F-DUR, G-DUR, A-DUR"};
    }
    return {result: true, message:""};
}

function translateKey(from, to, song) {

    let fromKey = keys[from];
    let toKey = keys[to];

    let fromValidationResult = validateFromTo(from, "from");
    if(fromValidationResult.result === false){
        return fromValidationResult.message;
    }

    let toValidationResult = validateFromTo(from, "to");
    if(toValidationResult.result === false){
        return toValidationResult.message;
    }

    const letters = song.split(' ');
    // console.log(letters);
    response = "";
    
    let letter = "";
    var index = -1;
    for (let i = 0; i < letters.length; i++) {
        letter = letters[i];
        index = fromKey.indexOf(letter);
        if (index === -1){
            return "unknown letter "+letter+" in "+from+" key. Allowed letters "+fromKey.join();
        }
        response +=toKey[index]+" ";
    }
    
    return response;
}

module.exports = { translateKey}; 