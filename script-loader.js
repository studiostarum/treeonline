(function() {
  const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  const mainScriptUrl = isLocalhost
    ? 'http://localhost:9000/src/main.js'
    : 'https://cdn.jsdelivr.net/gh/studiostarum/treeonline@main/dist/main.js'; // Updated to use dist folder

  const scripts = document.getElementsByTagName('script');
  for (let script of scripts) {
    if (script.src.includes('main.js')) {
      script.src = mainScriptUrl;
      break;
    }
  }
})();