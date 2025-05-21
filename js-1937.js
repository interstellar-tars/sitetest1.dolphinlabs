<script>
(function() {
  const COOKIE_NAME = ".UnifyInverse";
  const EXPECTED_VALUE = "XNSS-HSJW-3NGU-8XTJ-7EIQ-72IU-2YNV-3L4Y-N9TT-9G0A-B7FQ-RANC//)8V)CC3[k6Hju+J%E^9!hx?pN_42*e!m$3Fe)8V)CC3[k6Hj*3.-]N}/(ia//BGG-TEK-A-LHD-FME-A//739-JEE-895-346-FRW-387";

  function getCookie(name) {
    const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
    if (!match) return null;
    try {
      return decodeURIComponent(match[2]);
    } catch (e) {
      console.warn("Malformed cookie value, skipping decode:", match[2]);
      return match[2]; // Fallback to raw value
    }
  }

  const token = getCookie(COOKIE_NAME);

  if (token !== EXPECTED_VALUE) {
    document.documentElement.innerHTML = `
      <head>
        <title>Access Denied</title>
        <style>
          body {
            margin: 0;
            background-color: #111;
            color: #f55;
            font-family: sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            flex-direction: column;
            text-align: center;
          }
          h1 {
            font-size: 3em;
            margin-bottom: 0.5em;
          }
          p {
            font-size: 1.2em;
          }
        </style>
      </head>
      <body>
        <h1>Access Denied</h1>
        <p>You do not have permission to view this page.</p>
      </body>
    `;
  }
})();
</script>
