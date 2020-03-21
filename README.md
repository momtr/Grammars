# Grammars
An algorithm to create sentences following the rues of an invented grammar.

## Mathematically
The depicted grammar is kind of a context-free grammar (only kind of). However, it follows the priciples of context free grammars:
<br><br>
> G = (V, ∑, R, S), where:

- `G` is a Grammar
- `V` is a set of non-terminal symbols (= variables); e.g. P (for sentence)
- `∑` is a set of terminal symbols, e.g. "4"
- `R` is a set of rules; (a,b) element of R; a -> b
- `S` is the start symbol (non-terminal); `S` element of `V`

Now we can create sentences/strings using an instance of that grammar. 

## Run
In order to run it, please open index.html :)

## Getting more sentences
If you change the rule for a sentence to:

> "S": ["C P V , E . S . S", ""] 

and add "" to T:

> this.t = ["if", ..., ""]

Then you your grammar can construct an infinite number of sentences (with a finite length) deliminated by `.`, however the minimun number of sentences is one. <br>

> grammar.start().split(" . ") >= 1

However, it can cause a StackOverflowError when producing too many sentences. 
