# Portfolio – Docker Deployment

This project can be easily deployed with Docker. Here’s how to proceed:

## Deployment

Run the deployment script:

```bash
cd my_portfolio
./deploy.sh
```

The script will prompt you:

```
Which environment do you want to deploy?
1) Development (with hot reload)
2) Production
Your choice (1/2):
```

### Differences between modes

- **1) Development**:
  - Your local source code is mounted into the container (volume), so any change is instantly reflected (hot reload).
  - The Next.js server runs in development mode (`next dev`).
  - Ideal for coding and rapid testing.

- **2) Production**:
  - The code is built and then served in optimized mode (`next build` then `next start`).
  - No hot reload: you must rebuild the Docker image to see changes.
  - The app is optimized for performance and security.

## Stopping containers

To stop containers started with Docker Compose:

```bash
cd my_portfolio
docker-compose down
```

This stops and removes the created containers.

## Application access

- The app is available at: [http://localhost:3000](http://localhost:3000)

## Prerequisites

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

For more details, see the file `my_portfolio/README.md`.