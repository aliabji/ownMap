var words = ["hello", "goodbye", "the", "Beatles"];


var newArray = [];

var map = function(input, func) {
  
  Array.prototype.push.apply(newArray, input)
  
  return newArray

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});