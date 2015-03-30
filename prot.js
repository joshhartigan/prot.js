// prot.js
// Every being in the universe knows right from wrong.

/* object extensions */
Object.prototype.clone = function() {
  var copy = this.constructor()

  for (var attr in this) {
    if (this.hasOwnProperty(attr)) copy[attr] = this[attr]
  }

  return copy
}

/* array extensions */
Array.prototype.contains = function(elem) {
  return this.indexOf(elem) >= 0
}

Array.prototype.range = function(first, second) {
  var range = []

  console.log(typeof second)

  // only one argument means an array from
  // 0
  if (typeof second === 'undefined') {
    for (var i = 0; i < first; i++) {
      range.push(i)
    }
    return range
  }

  // two arguments means an array from
  // 'first' to 'second'
  for (var i = first; i < second; i++) {
    range.push(i)
  }

  return range
}

Array.prototype.repeat = function(reps) {
  var copy = this.clone()

  for (var i = 0; i < reps; i++) copy.push.apply(copy, copy)

  return copy
}
