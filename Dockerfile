FROM node:22-alpine

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 5000

CMD [ "node", "app.js" ]