FROM node:16
WORKDIR /app
RUN npm install -g nodemon
RUN npm init -y && npm install express cors typeorm pg http-errors jsonwebtoken bcryptjs
EXPOSE 5000
CMD ["nodemon", "src/app.js"]
