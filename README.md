# GitHub - Pivotal Tracker

The goal of this project is to integrate GitHub Issues and Pull Requests information into Pivotal Tracker.

What it does:

- Create a new story in Pivotal Tracker when a GitHub Issue or Pull Request is created
- Adds a comment to a Pivotal Tracker story whenever one is added to a GitHub Issue or Pull Request

It uses:

[GitHub Webhook Handler](https://github.com/rvagg/github-webhook-handler)
[GitHub Event Types & Payloads Reference](https://developer.github.com/v3/activity/events/types/)

#### Before start development

- Reset git:

    ```shell
    $ rm -rf .git
    $ git init
    ```

- Install/Update dependencies:

    ```shell
    $ npm install --save-dev azk-dev
    $ gulp editor:config
    $ gulp babel:runtime:install
    $ npm install
    ```

- Commit

    ```shell
    $ git add .
    $ git commit -m 'Start the project based on the `azk-projects-boilerplate`.'
    ```

## azk-dev

Show all gulp tasks:

```shell
$ gulp help
```

#### Tests

```shell
# default (lint + test, no watch)
$ gulp lint test

# test + lint + watch
$ gulp watch:lint:test

# test + watch (no-lint)
$ gulp watch:test
```
