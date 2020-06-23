FROM node:12.18.1
RUN apt-get update -y && apt-get clean
RUN mkdir /usr/src/app
RUN chmod 777 /usr/src/app
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "npm", "run", "start:prod" ]
