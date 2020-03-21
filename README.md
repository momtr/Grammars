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

> grammar.start().split(" . ").length >= 1

However, it can cause a StackOverflowError when producing too many sentences. 

## Propability of Termination (=PoT)
The propability of termintion `P` in stage `T` is is reduced or stays the same with moving into the next stage.

Consider the rule: 

> S -> [a, e], where e is the empty symbol 

Here, the propabiliy of termination in stage one is `100%` because there are `n` non-terminal symbols left and `n = 0`. In stage two, the PoT is undefined, since this rule will never reach stage two. <br>
However, when looking at a *recursive* rule:

> S -> [aS, e]

we see that `n = 1`. Therefore the PoT in stage one is `n/2 = 50%`. When moving to stage two, we can see that the PoT becomes `1/2 * 1/2 = 1/4 = 25%`:

- stage one:    a or aaS
- stage two:    aa or aaaS
- stage three:  aaa or aaaaS

Here we can see, that the PoT is constantly 25% if `n = 1`.
<br>

With increasing n by one: `n = 2` we have `n^2` different values for stage one. We have to take into consideration that the number of non-terminals may become `n^2`!

> S -> [aSS, e]

- stage one:  a or aaSSaSS or aaSS or aaSS
- stage two:  many more!

As you can see:

> PoT(t) >= PoT(t+1) >= PoT(t+2) >= ... >= PoT(t+n)
