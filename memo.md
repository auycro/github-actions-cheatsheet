# Memo

https://docs.github.com/en/actions/quickstart

## Quickstart

demo.yml

```yaml
name: GitHub Actions Demo
on:
  push:
    branches: main
jobs:
  Explore-GitHub-Actions:
    runs-on: ubuntu-latest
    steps:
      - run: echo "🎉 The job was automatically triggered by a ${{ github.event_name }} event."
      - run: echo "🐧 This job is now running on a ${{ runner.os }} server hosted by GitHub!"
      - run: echo "🔎 The name of your branch is ${{ github.ref }} and your repository is ${{ github.repository }}."
      - name: Check out repository code
        uses: actions/checkout@v3
      - run: echo "💡 The ${{ github.repository }} repository has been cloned to the runner."
      - run: echo "🖥️ The workflow is now ready to test your code on the runner."
      - name: List files in the repository
        run: |
          ls ${{ github.workspace }}
      - run: echo "🍏 This job's status is ${{ job.status }}."

```

## Component

1. Workflows
2. Events
3. Jobs
4. Actions
5. Runners

### Workflows

#### Triggers

https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows

- cron

```yaml
on:
  schedule:
    # * is a special character in YAML so you have to quote this string
    - cron:  '30 5,17 * * *'
```

- on-demand

```yaml
on:
  watch:
    types: [started]
```

### Events

tbd

### Jobs

#### using Matrix

03-nested-jobs.yml

```
  DeployJob:
    needs: [TestMatrixJob]
    strategy:
      max-parallel: 2
      matrix:
        include:
          - site: "us-east1"
            datacenter: "site-a"
            url: "us1.example.com"
          - site: "us-east2"
            datacenter: "site-b"
            url: "us2.example.com"
          - site: "ap-northeast-1"
            datacenter: "site-c"
            url: "jp.example.com"
    runs-on: ubuntu-latest
    steps:
      - run: echo "🎉 ${{ matrix.site }}"
      - run: echo "🐧 ${{ matrix.datacenter }}"    
      - run: echo "🗼 ${{ matrix.url }}"  
```

### Actions

#### Custom Actions

- Docker container action
- JavaScript action
- Composite action

### Runners

tbd

## Enviroment

### Setting up Enviroment

[deployment](https://docs.github.com/en/actions/deployment/targeting-different-environments/using-environments-for-deployment)

```
  DeployProJob:
    environment: 'SuperProduction'
    needs: [DeployDevJob]
    strategy:
      max-parallel: 2
      matrix:
        include:
          - site: "us-east1-prod"
            datacenter: "site-a-prod"
            url: "us1-prod.example.com"
          - site: "us-east2-prod"
            datacenter: "site-b-prod"
            url: "us2-prod.example.com"
          - site: "ap-northeast-1-prod"
            datacenter: "site-c-prod"
            url: "jp-prod.example.com"
    runs-on: ubuntu-latest
    steps:
      - run: echo "🎉 ${{ matrix.site }}"
      - run: echo "🐧 ${{ matrix.datacenter }}"    
      - run: echo "🗼 ${{ matrix.url }}"  
```

### Review deployment

tbd

## Monitor & troubleshoot

tbd

