FROM node:14.17-alpine

COPY package*.json ./

RUN yarn global add serve

RUN yarn

RUN yarn exec browserslist@latest --update-db

COPY . .

RUN yarn run build

EXPOSE 5000

CMD ["yarn", "exec", "serve", "-s", "./build"]

