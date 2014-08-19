xtuple-field-dev-sample
================

### Overview

Proof of concept for the most common type of field dev: adding fields to lists. This example adds four
fields to the prospect list to exemplify how to approach for different types of list augmentation.
  - Attribute based on new postgres function
  - Attribute that was already in the query but wasn't in the view
  - Attribute requiring extra join in the database
  - Attribute based on custom client-side logic

### File organization

This extension crams a lot of files together that would, by best practices, be separate. If you
were to follow the convention of `xtuple-ice-cream`, for example, there would be two database
scripts, and four clientside files, spread between four directories. All that is overkill for
an off-the-cuff piece of rapid field dev work, so this extension is an example of the least
amount of scaffolding and ceremony is necessary.

### Naming conventions

The name of this extension, per the `package.json` and `manifest.js`, is `xtuple-field-dev-sample`.
This repo has a slightly different name. It's best practice to use the same name throughout,
but it's not strictly necessary, although if this were a `private-extension` or an
`xtuple-extension`, it would be necessary to use a directory by the same name. And if you're using
the trick of symlinking to this directory from `xtuple-extensions/source` during development,
the name of the directory you reference with `build_app.js -e` has to be `xtuple-field-dev-sample`. Lastly, the
`context` of your ORMs also has to be the exact full name.

