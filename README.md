# Content-Creator
## Requirement:
- Install docker to start services
## Build & start services:
- Create *.env.docker* file at the same level as docker-compose.yml file
- Copy environment variables from *env.docker.example* file to *.env.docker* file
- Run command: `docker compose --env-file .env.docker up --build -d`
## Start backend service for development:
- Your computer needs to install nodejs version 18 first
- Move to backend directory: `cd ./backend`
- Install libraries: `npm install`
- Create *.env.backend.development* file in backend folder
- Copy environment variables from *env.backend.development.example* file to *env.backend.development* file
- Run command for start: `npm run start:dev`
- Server running on: [http;//localhost:5002/api/v1](http://localhost:5002/v1/)
## Common command:
- Build & start services: `docker compose up --build -d`
- Stop, remove container, remove network, remove volume: `docker compose down -v`
- Start backend for development: `npm run start:dev`
