/* Resolves the compiled design-system bundle namespace without hard-coding it.
   Load AFTER _ds_bundle.js; sets window.__DS. */
(function () {
  var probes = ['Button', 'Card', 'Wordmark', 'AppTile', 'Input'];
  function looksRight(v) {
    if (!v || typeof v !== 'object') return false;
    var hits = 0;
    for (var i = 0; i < probes.length; i++) if (typeof v[probes[i]] === 'function') hits++;
    return hits >= 2;
  }
  var found = null;
  var keys = Object.keys(window);
  for (var i = 0; i < keys.length && !found; i++) {
    try { if (looksRight(window[keys[i]])) found = window[keys[i]]; } catch (e) { /* guarded getter */ }
  }
  window.__DS = found || {};
  if (!found) console.warn('[voller] design-system bundle not found — set the file type to Design System so it compiles.');
})();
