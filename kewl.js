'use strict';

var alternateCase = function (s) {
    var chars = s.toLowerCase().split("");
    for (var i = 0; i < chars.length; i += 2) {
        chars[i] = chars[i].toUpperCase();
    }
    return chars.join("");
};

(function() {
    var input = document.querySelectorAll('[kewl=true]');
  
    input.forEach(function(element) {
        element.addEventListener('input', function()
        {
            element.value = alternateCase(element.value);
        });
    });
})();
