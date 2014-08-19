xtuple-field-dev-sample
================

The name of this extension, per the `package.json` and `manifest.js`, is `xtuple-field-dev-sample`.
This repo has a slightly different name. It's best practice to use the same name throughout,
but it's not strictly necessary, although if this were a `private-extension` or an
`xtuple-extension`, it would be necessary to use a directory by the same name. And if you're using
the trick of symlinking to this directory from `xtuple-extensions/source` during development,
the name of the directory you reference with `build_app.js -e` has to be `xtuple-field-dev-sample`. Lastly, the
`context` of your ORMs also has to be the exact full name.

