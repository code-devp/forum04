FROM node:10.13-alpine
LABEL maintainer="sohrab <shosseini@deloitte.com.au>"

WORKDIR /usr/src/app

# install packages first - so we leverage caching
COPY package*.json ./
RUN npm install

# copy and build the source code
COPY . ./
RUN npm run build

CMD [ "npm", "run", "serve" ]