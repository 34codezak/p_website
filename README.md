# Zachary Portfolio Website

This project contains a static portfolio site powered by HTML, CSS, and vanilla JavaScript. The repository now includes tooling that makes it straightforward to develop locally, build optimized production assets, and package everything into a Docker image that can be deployed to any container-friendly platform.

## Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer (the Dockerfile uses Node.js 20)
- npm (bundled with Node.js)
- [Docker](https://www.docker.com/) if you plan to build the production image locally

## Local Development

Install the dependencies once:

```bash
npm install
```

Start the Vite development server:

```bash
npm run dev
```

By default the site will open at [http://localhost:5173](http://localhost:5173) with hot module reloading.

## Production Build

Generate an optimized production build under `dist/`:

```bash
npm run build
```

Preview the production output locally:

```bash
npm run preview
```

## Container Image

Build the multi-stage Docker image and run it locally:

```bash
docker build -t portfolio-site .
docker run --rm -p 8080:80 portfolio-site
```

Or use Docker Compose:

```bash
docker compose up --build
```

The container serves the static files with NGINX and includes cache headers suitable for a production deployment.

## Deployment Notes

- The `Dockerfile` exposes port `80`; adjust ingress rules to match your hosting provider.
- Customize `docker/nginx.conf` if you need different caching or routing behaviour.
- To deploy on platforms such as AWS ECS, Azure Web Apps for Containers, or Google Cloud Run, push the built image to your registry of choice and reference it in your infrastructure definitions.

