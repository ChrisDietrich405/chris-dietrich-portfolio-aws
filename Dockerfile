FROM node:alpine 

WORKDIR /react-app

ENV NODE_ENV production

COPY package.json /react-app

RUN npm install 

COPY . .

RUN npm run build 

CMD ["npm", "start"]

