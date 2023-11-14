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

function translate(from, to, song){
    console.log(`${song} from ${from} to ${to}: ${translateKey(from, to, song)}`);
}


translate("C-DUR", "D-DUR", "c d e f g a h c c c c");
translate("C-DUR", "F-DUR", "c d e f g a h c c c c");
translate("C-DUR", "G-DUR", "c d e f g a h c c c c");
translate("C-DUR", "A-DUR", "c d e f g a h c c c c");


translate("D-DUR", "C-DUR", "d e f# g a h c# d g g g");
translate("D-DUR", "F-DUR", "d e f# g a h c# d g g g");
translate("D-DUR", "G-DUR", "d e f# g a h c# d g g g");
translate("D-DUR", "A-DUR", "d e f# g a h c# d g g g");