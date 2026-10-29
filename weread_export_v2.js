// WeRead credential export (script-response-body version)
// Reads weread_auth_v2 from Quantumult X persistent storage and shows it as the page body.
// If nothing was captured yet, the page shows a clear EMPTY message instead of a blank page.
var auth = $prefs.valueForKey("weread_auth_v2");
$done({ body: auth ? auth : "EMPTY: weread_auth_v2 not found - please capture first (open WeRead app with QX MITM on)" });
