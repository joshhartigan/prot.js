### ![dancing lady](http://i.imgur.com/xhBo7N0.gif) prot.js

Additions to JavaScript's prototypes,
named after [Prot from *K-Pax*](https://en.wikipedia.org/wiki/K-PAX).💫

Here's a list of the features:

* [`Object.clone()`](https://github.com/joshhartigan/prot.js/blob/master/prot.js#l5,l13) - return a copy of an Object, with removal of any references to the original. This is helpful for creating clones of `this` in methods.
* [`Array.contains()`](https://github.com/joshhartigan/prot.js/blob/master/prot.js#l16,l18) - a simple but helpful method that shortens writing `if ([foo].indexOf(bar) > -1)`.
* [`Array.range()`](https://github.com/joshhartigan/prot.js/blob/master/prot.js#l20,l41) - creates an array from the first argument upto (not including) the second argument. If a second argument is not given, it creates an array from 0 upto the first argument.
* [`Array.repeat()`](https://github.com/joshhartigan/prot.js/blob/master/prot.js#l43,l49) - will repeat the array on itself, however many times are specified.
