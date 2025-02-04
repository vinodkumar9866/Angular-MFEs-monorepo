const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "host",

  exposes: {
    "./Component": "./projects/host/src/app/app.component.ts",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },

  // remotes: {
  //   demo1: "http://localhost:4300/remoteEntry.js",
  //   demo2: "http://localhost:4400/remoteEntry.js",
  // },
  shared: {
    "@angular/core": { singleton: true, strictVersion: false },
    "@angular/common": { singleton: true, strictVersion: false },
    "@angular/router": { singleton: true, strictVersion: false },
    "@angular/material": { singleton: true, strictVersion: false },
    "@angular/common/http": { singleton: true },
    "@ngrx/store": { singleton: true, strictVersion: false },
  },
});
