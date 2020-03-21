let grammar;

function setup() {
    // define our non-terminal symbols
    let v = ["S", "C", "P", "V", "L", "O", "T", "A", "K"];
    // define our terminal words
    let t = ["if", "since", "moritz", "peter", "wuffi", "runs", "paints", "sings", "likes", "hates", "loves", "drives", "cars", "motorbikes", "", ","];
    // define our rules
    // e.g. a sentence S = a condition C + an object P + a verb V + comma , + a sub-clause E
    let p = {
        "S": "C P V , E",
        "E": ["P V"],
        "C": ["if", "since"],
        "P": ["moritz", "peter", "wuffi"],
        "V": ["O", "T"],
        "O": ["paints", "runs", "sings"],
        "T": "A K",
        "A": ["hates", "likes", "loves", "drives"],
        "K": ["cars", "motorbikes"]
    };
    // define our starting symbold (a sentence)
    let s = "S";
    // create a new grammar
    grammar = new Grammar(v, t, p, s);

    // create some examples
    for(let i = 0; i < 100; i++) {
        // use p5.s's createP function for DOM manipulation
        createP(grammar.start());
    }

}