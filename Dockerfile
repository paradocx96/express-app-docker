FROM node:16-alpine

RUN npm i -g ts-node typescript

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 8080

CMD ["ts-node", "index.ts"]
