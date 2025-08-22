## Setup

npx create-turbo@latest




## Code Architecture Problem

Your team wants to build a simple Task Manager app in a Turborepo monorepo. The project should include:

    A Next.js web app for the UI
    An Express.js API service for backend logic
    A shared TypeScript package for types/interfaces (used by both frontend and backend)
    A working Turborepo pipeline (dev, build, lint, test)
    The goal is to bootstrap the repo, implement a minimal feature end-to-end, and demonstrate good architectural practices.

Requirements

1. Monorepo Setup

Initialize a Turborepo, with a directory structure that includes:

/apps

  /web         (Next.js frontend)

  /api         (Express backend)

/packages

  /types       (Shared TypeScript interfaces)

2. Shared Types

In /packages/types, create a Task interface

3. Express API

In /apps/api, create an Express server with endpoints:

GET /tasks → returns an array of tasks

POST /tasks → accepts a task and adds it to memory

Use the shared Task type from /packages/types.

4. Next.js Web App

In /apps/web, create a page (/tasks) that:

Fetches tasks from the Express API (/tasks).

Displays the list of tasks.

Includes a simple form to add a new task.

Use the shared Task type from /packages/types.

5. Scripts & Turborepo Pipelines

Add scripts in each app:

dev (Next.js dev server, Express dev server)

build

lint

test

Configure turbo.json so dev runs both apps concurrently.

6. Test driven development

Follow the TDD cycle while building the specified functionality

7. Logging

Add a shared logging package used by both apps

8. Stretch goals:

Add a database to the API instead of just keeping tasks in memory