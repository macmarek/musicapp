const keys = {};
keys["C-DUR"]=[	"c",  	"d",	"e",	"f",	"g",	"a",	"h",	"c"];
keys["D-DUR"]=[	"d",	"e",	"f#",	"g",	"a", 	"h", 	"c#",	"d"];
keys["F-DUR"]=[	"f",	"g",	"a",	"h",	"c",	"d",	"e",	"f"];
keys["G-DUR"]=[	"g",	"a",	"h",	"c",	"d",	"e",    "f#",	"g"];
keys["A-DUR"]=[	"a",	"h",	"c#",	"d",	"e",	"f#",	"g#",	"a"];


function translateKey(from, to, song) {
    let fromKey = keys[from];
    let toKey = keys[to];
    const letters = song.split(' ');
    // console.log(letters);
    response = "";
    letters.forEach((letter) => {
        var index = fromKey.indexOf(letter);
        if (index === -1){
            return "unknown letter "+letter+" in "+from+" key";
        }
        response +=toKey[index]+" ";
    });
    
    return response;
}

module.exports = { translateKey}; 