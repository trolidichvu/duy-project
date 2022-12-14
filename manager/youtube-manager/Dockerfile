FROM node:gallium-alpine
WORKDIR /root
COPY . .
RUN npm install -g npm
RUN npm install

EXPOSE 8080
CMD npm start
