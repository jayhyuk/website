FROM node:22.2.0

WORKDIR /usr/app
COPY ./ /usr/app
RUN npm install


CMD ["npm","start"]