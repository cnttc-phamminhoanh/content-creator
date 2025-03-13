FROM node:16
WORKDIR /app
RUN npm install -g nodemon
RUN npm init -y && npm install express cors typeorm pg http-errors ioredis joi jsonwebtoken bcrypt
EXPOSE 5000
CMD ["nodemon", "src/app.js"]
