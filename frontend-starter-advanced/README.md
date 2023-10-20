# Advanced React Starter Template

A Trends in Web Development Starter Template.

This template is appropriate for:

-   More complex frontends
-   Final projects
-   Etc.

Note that it does NOT contain a backend! This is only for the frontend.

It features the following:

-   [Mantine UI Library](https://mantine.dev/) for prefabricated components
-   [Lucide Icon Library](https://lucide.dev/) for prefabricated icons
-   [React Router](https://reactrouter.com/) for routing

It also utilizes the following core libraries:

-   React
-   Vite
-   SWC
-   TypeScript
-   Pnpm

## Development

### Setup

First, run `pnpm install` to install all dependencies.

Then, run `pnpm dev` to start the development server.

You can then visit `http://localhost:5173` to view the app.

### Project Structure

Here's a brief overview of the parts of the project you are encouraged to edit:

-   `src/components`: Put your custom React components here.
-   `src/pages`: Put entire routed pages here, composed of components.
-   `src/constants/Navigation.tsx`: If you create more or delete pages, you'll need to update this file with your changes.

Here's a brief technical explanation of the rest of the project:

-   `src/App.tsx`: The root React component. In here, I've setup a component library, as well as routing, for you already. You may customize it, but you don't have to unless you know what you're doing.
-   `src/index.css`: The global CSS file. You can add global styles here.

Additionally:

-   `src/assets`: Put any static assets here, such as images. Import and use them freely.
