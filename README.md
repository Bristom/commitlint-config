# @bristom/commitlint-config

The Bristom pattern for git commmit messages using the commitlint tool.

This package is meant to be used with the [@commitlint/cli](https://www.npmjs.com/package/@commitlint/cli) and git hooks. Check the availability for your language.

It was initially wrote to be used with Node.js and [Huksy](https://www.npmjs.com/package/husky). But since git hooks are available in any git repository for any language, you can use the commitlint CLI with any language (but keep in mind you must have Node.js installed to run the CLI globally).

## Commit Structure

The default structure that is meant to be checked with these rules is:

```
[type]: Subject

optional body

optional footer
```

With the following requirements:

1. The type **must be** in lower-case
2. The type is **obligatory**
3. The type **must be** wrapped in square brackets (the [] chars)
4. The subject **must be** in sentence case (first letter in capital case)
5. The subject is **obligatory**

The body and footer are optional and don't have a specific case to be written.

The repo itself implements the rules specified.

Written and maintened by: [luk3skyw4lker](https://github.com/luk3skyw4lker).
