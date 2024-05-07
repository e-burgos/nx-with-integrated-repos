# Membrane Frontend Monorepo with Nx Integrated Repos

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

## Generate Nx Workspace

Learn more about [Tutorial](https://nx.dev/getting-started/tutorials/react-monorepo-tutorial).

- Run `npx create-nx-workspace@latest membrane-webapp-mfe` to create a new Nx workspace.
  ✔ Which stack do you want to use? · none
  ✔ Package-based monorepo, integrated monorepo, or standalone project? · integrated
  ✔ Set up CI with caching, distribution and test deflaking · skip
  ✔ Would you like remote caching to make your build faster? · yes

- Run `nx add @nx/react` to add React support to your workspace.
  ✔ Installing @nx/react@18.3.4...
  ✔ Initializing @nx/react...

- Run `nx add @nx/vite` to add React support to your workspace.
  ✔ Installing @nx/vite@18.3.4...
  ✔ Initializing @nx/vite...

### Generate Host Application

Host application is the main application that will import others applications and works as orchestrator.
This app will be the main entry point of the project.

- Run `npx nx g @nx/react:app host --directory=apps/host` to generate a host application. You can use the `--directory` flag to specify.
  ✔ Which stylesheet format would you like to use? · css
  ✔ Which bundler would you like to use? · vite
  ✔ Would you like to add React Router to this application? · yes
  ✔ Which E2E test runner would you like to use? · none
  ✔ What should be the project name and where should it be generated? · as provider

### Add Remote Applications to the project

1. Run `nx g @nx/react:app app-name --directory=apps/app-name` to generate a some application. You can use the `--directory` flag to specify.
   ✔ Which stylesheet format would you like to use? · css
   ✔ Which bundler would you like to use? · vite
   ✔ Would you like to add React Router to this application? · yes
   ✔ Which E2E test runner would you like to use? · none
   ✔ What should be the project name and where should it be generated? · as provider

- nx g @nx/react:app dashboard --directory=apps/dashboard
- nx g @nx/react:app loans --directory=apps/loans
- nx g @nx/react:app trades --directory=apps/trades
- nx g @nx/react:app derivatives --directory=apps/derivatives
- nx g @nx/react:app collateral --directory=apps/collateral
- nx g @nx/react:app settlements --directory=apps/settlements
- nx g @nx/react:app counterparties --directory=apps/counterparties
- nx g @nx/react:app settings --directory=apps/settings
- nx g @nx/react:app session --directory=apps/session

2. Run `npx nx run-many --target=build --all` to build all applications.

3. If you want to serve an application, run `npx nx run app-name:serve`.

### Add libraries to the project

1. Run `nx g @nx/react:library ui --directory=libs/ui` to generate a library. You can use the `--directory` flag to specify.
   ✔ What unit test runner should be used? · jest
   ✔ Which bundler would you like to use to build the library? · vite (Choose 'none' to skip build setup)
   ✔ What should be the project name and where should it be generated? · as provider

### Add Remote Storybook to the project

1. Run `nx g @nx/react:app ui-name --directory=apps/shared/ui-name` to generate a remote application. You can use the `--directory` flag to specify.
   ✔ Which stylesheet format would you like to use? · css
   ✔ Which E2E test runner would you like to use? · none
   ✔ What should be the project name and where should it be generated? · as provider

2. Run `nx g @nx/react:storybook-configuration ui-name` to setup ui project with Storybook.

3. Run `npx nx add @nx/storybook` to add Storybook support to your workspace.

4. Run `nx storybook ui-name -p 6006 -s public` to serve Storybook.

## How to use the Membrane Frontend Monorepo

### Install dependencies

Run `npm install` to install all dependencies.

### Run the project

Run `npm run start` to serve the host application with static remotes.

Or run `npm run dev` to serve the host application with static remotes in development configuration.

### Run the project

Run `npm run start` or `npx nx run host:serve` to serve the host application, in this example the other apps will be consumed through the client library to be used only with the host, this is necessary as it can cause concurrent dependencies in the project.

### Build the project

Run `npm run build` to build all apps and libraries, all changes will be built in the dist folder.

### Explore the project graph

Run `npx nx graph` or `npm run graph` to show the graph of the workspace.
It will show tasks that you can run with Nx and shows the dependencies between apps and libraries.

- [Learn more about Exploring the Project Graph](https://nx.dev/core-features/explore-graph)

## More information

### Integrate with editors

Enhance your Nx experience by installing [Nx Console](https://nx.dev/nx-console) for your favorite editor. Nx Console
provides an interactive UI to view your projects, run tasks, generate code, and more! Available for VSCode, IntelliJ and
comes with a LSP for Vim users.

### Nx plugins and code generators

Add Nx plugins to leverage their code generators and automated, inferred tasks.

```
# Add plugin
npx nx add @nx/react

# Use code generator
npx nx generate @nx/react:app demo

# Run development server
npx nx serve demo

# View project details
npx nx show project demo --web
```

Run `npx nx list` to get a list of available plugins and whether they have generators. Then run `npx nx list <plugin-name>` to see what generators are available.

Learn more about [code generators](https://nx.dev/features/generate-code) and [inferred tasks](https://nx.dev/concepts/inferred-tasks) in the docs.

### Running tasks

To execute tasks with Nx use the following syntax:

```
npx nx <target> <project> <...options>
```

You can also run multiple targets:

```
npx nx run-many -t <target1> <target2>
```

..or add `-p` to filter specific projects

```
npx nx run-many -t <target1> <target2> -p <proj1> <proj2>
```

Targets can be defined in the `package.json` or `projects.json`. Learn more [in the docs](https://nx.dev/features/run-tasks).

### Set up CI!

Nx comes with local caching already built-in (check your `nx.json`). On CI you might want to go a step further.

- [Set up remote caching](https://nx.dev/features/share-your-cache)
- [Set up task distribution across multiple machines](https://nx.dev/nx-cloud/features/distribute-task-execution)
- [Learn more how to setup CI](https://nx.dev/recipes/ci)

### Understand the workspace

- [Join the community](https://nx.dev/community)
- [Subscribe to the Nx Youtube Channel](https://www.youtube.com/@nxdevtools)
- [Follow us on Twitter](https://twitter.com/nxdevtools)

✨ **This workspace has been generated by [Nx, Smart Monorepos · Fast CI.](https://nx.dev)** ✨
