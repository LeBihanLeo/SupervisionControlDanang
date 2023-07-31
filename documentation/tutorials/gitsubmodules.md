# How to use Git submodules

## Add a submodule to a repository

- use an existing repository or create a new one
- go to the parent folder of the main repository and run `git submodule add <url>`  
  this will create a new folder with the name of the repository

## Clone a repository with submodules

```bash
git clone --recurse-submodules <url>
```

## Commits

## Push

```bash
git push --recurse-submodules=on-demand
```

## Pull

```bash
git pull --recurse-submodules
```

if you are using GitHub Desktop app, do not forget to push the submodules then push the main repository.
