FROM node:16-alpine as builder
WORKDIR /app
COPY .. .
RUN npm i
CMD ["npm", "run", "start:dev"]
