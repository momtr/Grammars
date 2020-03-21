// Moritz Mitterdorfer, 2020

/**
 * This class models a grammar of a formal language
 */
class Grammar {

    /**
     * Constructor
     * @param {Array} v     - all variables of the grammar (= non-terminal symbols)
     * @param {Array} t     - all terminal symbols of the grammar (= no variables)
     * @param {Object} r    - set/mapping of rules ((a,b) element of P; a = b; a -> b)
     * @param {Array} s     - start symbol (element of V)
     */
    constructor(v, t, r, s) {
        // v is a set of variables
        this.v = v;
        // t is a set of terminal elements (no variables)
        this.t = t;
        // r is a set of rules
        this.r = r;
        // s is the starting work (since it is an element of v, it is a variable)
        this.s = s;
    }

    /**
     * Start returns a string based on the invented grammar
     */
    start() {
        return this.expand(this.s);
    }

    /**
     * Expand returns a string based on the invented grammar (calls itself recursively)
     * @param {string} i - element of V or element of T
     */
    expand(i) {
        // output string
        let res = "";
        // get all terminal and non-terminal elements -> to array
        // all symbols are split by " "
        let ar = i.split(" ");
        // loop through all symbols
        for(let k of ar) {
            // if the k-th element of the array is a terminal element, we append it to the string
            if(this.isTerminal(k)) {
                res += k + " ";
            }
            else {
                // it is a terminal element (= variable)
                // we have to get the rule
                let rule = this.r[k];
                // if the rule is an object, pick a random element
                if(typeof rule === 'object') {
                    rule = rule[Math.floor(Math.random() * rule.length)];
                }
                // append the expanded rule to the output string
                res += this.expand(rule);
            }
        }
        // return output string
        return res;
    }

    /**
     * IsTerminal checks is parameter w is element of T (this.t)
     * @param {string} w 
     */
    isTerminal(w) {
        return this.t.indexOf(w) != -1 ? true : false;
    }

}

