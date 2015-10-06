var postcss = require('postcss');


function isPx (value) {
  return (value.toString()).indexOf('px') > -1;
}

function toUnitless (value) {
  return value.split('px')[0] * 1;
}

function convertUnitlessLineHeight (value, fontSize) {
  var result = value;

  if (isPx(fontSize)) {
    result = toUnitless(fontSize);
    result = (result / value);
    result = Math.round(result * 100) / 100;
  }

  return result;
}


module.exports = postcss.plugin('postcss-line-height-px-to-unitless', function (opts) {
  var lineHeightProp = 'line-height',
    fontSizeProp = 'font-size';

  return function (css, result) {

    css.walkRules(function (rule) {
      var fontSize;

      rule.walkDecls(fontSizeProp, function (decl) {
        fontSize = decl.value;
      });

      rule.walkDecls(lineHeightProp, function (decl) {

        if (fontSize && isPx(decl.value)) {
          var value = toUnitless(decl.value);

          decl.cloneAfter({
            prop: lineHeightProp,
            value: convertUnitlessLineHeight(value, fontSize)
          });

          decl.remove();
        }

      });
    });

  };

});
