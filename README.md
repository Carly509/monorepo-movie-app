# Turborepo starter

This is an official starter Turborepo.

## Using this example

Run the following command:

```sh
npx create-turbo@latest
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `@repo/ui`: a stub React component library shared by both `web` and `docs` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm dev
```


# Movie App Monorepo README

Welcome to the Movie App Monorepo! This project is built using **Turborepo**, **NestJS**, **Prisma**, **PostgreSQL**, **tRPC**, **Next.js**, and **Material UI**. This README will guide you through setting up and running the application.

## Project Structure

The monorepo is organized into several packages:

- **apps/**: Contains the main applications (NestJS API and Next.js frontend).
- **packages/**: Contains shared libraries and utilities, including the Prisma client and any other shared components.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (version 14 or higher)
- Yarn (as the package manager)
- PostgreSQL (for the database)

## Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd movie-app-monorepo
```

### 2. Install Dependencies

Run the following command in the root directory of the monorepo to install all dependencies:

```bash
yarn install
```

### 3. Set Up the Database

1. Create a PostgreSQL database for the application.
2. Update the database connection string in the `.env` file located in the `apps/api` directory:

   ```plaintext
   DATABASE_URL=postgresql://USER:PASSWORD@localhost:5432/MOVIE_APP_DB
   ```

3. Run the Prisma migrations to set up the database schema:

```bash
yarn workspace api prisma migrate dev --name init
```

### 4. Running the Applications

You can run both the NestJS API and the Next.js frontend simultaneously using Turborepo. In the root directory, execute:

```bash
yarn dev
```

This command will start both applications. The API will typically run on `http://localhost:3000`, and the Next.js frontend will run on `http://localhost:3001`.

### 5. Accessing the Applications

- **NestJS API**: Visit `http://localhost:3000/api` to access the API endpoints.
- **Next.js Frontend**: Visit `http://localhost:3001` to view the frontend application.

## Development

### Adding New Features

To add new features or packages, follow these steps:

1. Create a new package in the `packages/` directory.
2. Update the `turbo.json` file to include the new package in the build pipeline.
3. Use the shared Prisma client from the `packages/` directory in both the API and frontend as needed.

### Running Tests

To run tests for the applications, use the following command:

```bash
yarn test
```




### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)


## Conclusion

This monorepo setup allows for efficient development and management of the Movie App using modern technologies. Feel free to explore the codebase and contribute to the project!

If you have any questions or need further assistance, please reach out to the project maintainers. Happy coding!
