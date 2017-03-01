module.exports = {
  'plugins': [
    'stylelint-order',
  ],
  rules: {
    indentation: 2,
    'max-empty-lines': 4,
    'max-line-length': 150,
    'max-nesting-depth': 5,
    'no-duplicate-selectors': true,
    'no-empty-source': true,
    'no-eol-whitespace': true,
    'no-extra-semicolons': true,
    'no-missing-end-of-source-newline': true,
    'color-hex-case': 'lower',
    'color-hex-length': 'short',
    'color-no-invalid-hex': true,
    'font-family-name-quotes': 'always-unless-keyword',
    'font-weight-notation': 'numeric',
    'function-calc-no-unspaced-operator': true,
    'function-comma-space-after': 'always-single-line',
    'function-comma-space-before': 'never',
    'function-linear-gradient-no-nonstandard-direction': true,
    'function-max-empty-lines': 0,
    'function-name-case': 'lower',
    'function-parentheses-space-inside': 'never-single-line',
    'function-url-quotes': 'always',
    'function-whitespace-after': 'always',
    'number-leading-zero': 'always',
    'number-max-precision': 3,
    'number-no-trailing-zeros': true,
    'string-no-newline': true,
    'string-quotes': 'single',
    'length-zero-no-unit': true,
    'time-min-milliseconds': 100,
    'unit-blacklist': [],
    'unit-case': 'lower',
    'unit-no-unknown': [ true, {
      ignoreUnits: [
        'x'
      ]
    } ],
    'value-keyword-case': 'lower',
    'value-no-vendor-prefix': true,
    'value-list-comma-newline-before': 'never-multi-line',
    'value-list-comma-space-after': 'always-single-line',
    'value-list-comma-space-before': 'never',
    'shorthand-property-no-redundant-values': true,
    'property-case': 'lower',
    'property-no-unknown': true,
    'property-no-vendor-prefix': true,
    'declaration-bang-space-after': 'never',
    'declaration-bang-space-before': 'always',
    'declaration-colon-newline-after': 'always-multi-line',
    'declaration-colon-space-after': 'always-single-line',
    'declaration-colon-space-before': 'never',
    'declaration-no-important': true,
    'declaration-block-no-duplicate-properties': [ true, {
      ignore: [ 'consecutive-duplicates' ]
    } ],
    'declaration-block-no-shorthand-property-overrides': true,
    'declaration-block-semicolon-newline-after': 'always',
    'declaration-block-semicolon-space-after': 'always-single-line',
    'declaration-block-single-line-max-declarations': 1,
    'declaration-block-trailing-semicolon': 'always',
    'order/declaration-block-order': [
      [
        'custom-properties',
        'dollar-variables',
        { type: 'at-rule', name: 'extend' },
        'declarations',

        // `%foo` stylus/scss placeholders
        { type: 'rule', selector: /(aka %foo)|^[%$]\w/ },

        // `&:before` (aka pseudo selectors/elements)
        { type: 'rule', selector: /(aka &:before)|^&$|^&::?[a-z\-]+/ },

        // `.foo &` nested parent selector
        { type: 'rule', selector: /(aka .foo &)|^[\.#]?[a-z]+ &|^.+&$/ },

        // `&.bar`, `&--zoom`, `+ .foo` compound/modifier selector
        { type: 'rule', selector: /(aka &.foo, &--foo, + .foo)|^&[\.#][a-z]+|^&--[a-z_-]+|^[+~>]{1}.+/ },

        { type: 'at-rule', name: 'media' }, // `@media` media queries
        { type: 'at-rule', name: 'include', parameter: 'media' }, // `@include media` include style media query

        // `&__foo` bem element, `.foo` nested element
        { type: 'rule', selector: /(aka &__foo, .foo)|^&__[a-z-_]+|^[\.#]?[a-z-_\s]+|^\*/ },
      ]
    ],

    'order/declaration-block-properties-alphabetical-order': true,
    'block-closing-brace-empty-line-before': 'never',
    'block-closing-brace-newline-after': [ 'always', {
      ignoreAtRules: [ 'if', 'else', 'else if' ]
    } ],
    'color-named': [ 'never' ],
    'block-closing-brace-newline-before': 'always-multi-line',
    'block-no-empty': true,
    'block-opening-brace-newline-after': 'always-multi-line',
    'block-opening-brace-space-after': 'always-single-line',
    'block-opening-brace-space-before': 'always',
    'selector-attribute-brackets-space-inside': 'never',
    'selector-attribute-operator-space-after': 'never',
    'selector-attribute-operator-space-before': 'never',
    'selector-attribute-quotes': 'always',
    'selector-combinator-space-after': 'always',
    'selector-combinator-space-before': 'always',
    'selector-max-compound-selectors': 3,
    'selector-max-specificity': '0,3,1',
    'selector-no-attribute': true,
    'selector-no-id': true,
    'selector-no-qualifying-type': true,
    'selector-no-vendor-prefix': true,
    'selector-pseudo-class-case': 'lower',
    'selector-pseudo-class-no-unknown': true,
    'selector-pseudo-class-parentheses-space-inside': 'never',
    'selector-pseudo-element-case': 'lower',
    'selector-pseudo-element-colon-notation': 'single',
    'selector-pseudo-element-no-unknown': true,
    'selector-type-case': 'lower',
    'selector-type-no-unknown': true,
    'selector-max-empty-lines': 0,
    'selector-list-comma-newline-before': 'never-multi-line',
    'selector-list-comma-space-after': 'always-single-line',
    'selector-list-comma-space-before': 'never',
    'rule-empty-line-before': [ 'always-multi-line', {
      except: [ 'first-nested', 'after-single-line-comment' ],
      ignore: [ 'after-comment' ]
    } ],
    'media-feature-colon-space-after': 'always',
    'media-feature-colon-space-before': 'never',
    'media-feature-name-case': 'lower',
    'media-feature-name-no-vendor-prefix': true,
    'media-feature-parentheses-space-inside': 'never',
    'media-feature-range-operator-space-after': 'always',
    'media-feature-range-operator-space-before': 'always',
    'media-query-list-comma-newline-after': 'always-multi-line',
    'media-query-list-comma-newline-before': 'never-multi-line',
    'media-query-list-comma-space-after': 'always',
    'media-query-list-comma-space-before': 'never',
    'at-rule-empty-line-before': [ 'always', {
      ignore: [ 'after-comment' ],
      except: [ 'first-nested', 'blockless-after-same-name-blockless' ],
      ignoreAtRules: [ 'include', 'extends', 'else' ]
    } ],
    'at-rule-name-case': 'lower',
    'at-rule-name-space-after': 'always',
    'at-rule-no-unknown': true,
    'at-rule-no-vendor-prefix': true,
    'at-rule-semicolon-newline-after': 'always',
    'comment-no-empty': true,
    'comment-whitespace-inside': 'always'
  }
};
