FROM node:16-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY .. .
ENV NODE_ENV production
RUN npm run build

FROM node:16-alpine
ENV NODE_ENV production
COPY package*.json ./
RUN apk add dumb-init && npm ci --only=production
WORKDIR /app
COPY --chown=node:node --from=builder /app/dist ./dist
USER node
CMD ["dumb-init", "node", "dist/main"]
