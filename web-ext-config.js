module.exports = {
  sourceDir: "./build-release/",
  build: {
    overwriteDest: true
  },
  run: {
    firefox: process.env.FIREFOX_BINARY || "firefox",
    browserConsole: false,
    startUrl: ["about:addons", "about:debugging"],
    pref: []
  }
};
