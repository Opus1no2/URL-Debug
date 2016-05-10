'use strict';
(function (d) {
  var pages = d.querySelector('.pages span'),
    domain = d.querySelector('.domain span'),
    query  = d.querySelector('.query span'),
    parser = d.querySelector('a.parser');

  function reset() {
    domain.innerHTML = '';
    pages.innerHTML = '';
    query.innerHTML = '';
  }

  function getQueryParameters(str) {
    if (/\?/.test(str)) {
      return (str).replace(/(^\?)/,'')
        .split("&")
        .map(function(n) {
          return n = n.split("="), this[n[0]] = n[1], this
        }.bind({}))[0];
    }
  }

  function debug() {
    var param, queryObj;

    setTimeout(function() {
      parser.href = d.querySelector('textarea').value;

      reset();

      if (parser.protocol) {
        domain.innerHTML = parser.protocol + '//' + parser.hostname;
        pages.innerHTML = parser.pathname;

        queryObj = getQueryParameters(parser.search);

        if (queryObj) {
          for (param in queryObj) {
            query.innerHTML += decodeURIComponent(param) + ' = ' +
                         decodeURIComponent(queryObj[param]) + '<br />';
          }
        }
      }
    }, 100);
  }

  d.querySelector('textarea').onpaste = debug;
  d.querySelector('.debug-btn').onclick = debug;

})(document)
