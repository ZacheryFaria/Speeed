FROM node:14.17-alpine

COPY package*.json ./

RUN yarn global add serve

RUN yarn

COPY . .

RUN yarn run build

EXPOSE 5000

CMD ["serve", "-s", "/build"]

