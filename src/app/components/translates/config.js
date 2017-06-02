'use strict';

module.exports = Config;

function Config($translateProvider) {
  $translateProvider.useStaticFilesLoader({
    prefix: 'assets/i18n/i18n-',
    suffix: '.json'
  });
  // eslint-disable-next-line no-undef
  $translateProvider.preferredLanguage(LANG);

  // $translateProvider.useLocalStorage();
  // Using angular-translate and variable content, the result will not be escaped correctly.
  // This means your app is vulnerable for serious attacks (OWASP).
  $translateProvider.useSanitizeValueStrategy('sanitizeParameters');
}
