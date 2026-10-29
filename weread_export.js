const auth = $prefs.valueForKey("weread_auth_v2");
$done({
  response: {
    status: 200,
    headers: { "Content-Type": "text/plain; charset=utf-8" },
    body: auth || "NO_AUTH_YET"
  }
});
