# Techmentor

## How to Run

This app uses [Docker](https://www.docker.com/products/docker-desktop) for the
development environment. If you don't have it yet, please download and install it.

### First-time setup

To install this app for the first time, build the docker image with:

```sh
docker-compose build --no-cache
```

### Every time

Run the servers with:

```sh
docker-compose up
```

This will start a **frontend** development server on `http://localhost:3000/` and
a **backend** development server on `http://localhost:8000/`.
