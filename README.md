# How to update the graphql schema

download the schema, replace the content of truework.graphql
run `npx docusaurus graphql-to-doc` - it will regenerate bunch of files in sync with the schema

# How to patch website for Stoplight

Switch to stoplight branch
`git checkout stoplight`

sync the branch with main

`git reset --hard origin/main`

rename mdx files to md

`find docs -name "*.mdx" -exec sh -c 'cp "$1" "${1%.mdx}.md"' _ {} \;`

delete mdx files

`find docs -name "*.mdx" -type f -exec rm {} \;`

patch links to the .md links for stoplight

`find docs -name "*.md" -type f -exec sed -i '.bak' 's|/docs/\([^)#]*\)|docs/\1.md|gI' {} \;`

delete *.bak files generated in the prev step

`find docs -name "*.bak" -type f -exec rm {} \;`

stage all files, commit and force-push stoplight branch


# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
# rippling-graphql
