(function() {
  const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  const mainScriptUrl = isLocalhost
    ? 'http://localhost:9000/main.js'
    : 'https://studiostarum.github.io/treeonline/main.js';

  const scripts = document.getElementsByTagName('script');
  for (let script of scripts) {
    if (script.src.includes('MAIN_SCRIPT_URL')) {
      script.src = mainScriptUrl;
      break;
    }
  }
})();