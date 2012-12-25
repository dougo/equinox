// Use this for the RequireJS optimizer:
//   node r.js -o main.build.js
// This creates an optimized copy of the app in ../equinox-build.
// For details, see:
//   http://requirejs.org/docs/optimization.html
//   http://requirejs.org/docs/jquery.html

({
  appDir: "./",
  baseUrl: ".",
  dir: "../equinox-build",

  paths: {
    // For jquery plugins that require the module ID "jquery".
    jquery: "lib/zepto"
  },

  modules: [
    {
      name: "main"
    }
  ]
})
