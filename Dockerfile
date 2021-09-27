FROM node:14.17-buster

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

RUN npm install -g serve

EXPOSE 5000

CMD ["npx", "serve", "-s", "./build"]

