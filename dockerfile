FROM node:16-stretch-slim as builder
WORKDIR /usr/app
COPY ./package.json .
RUN yarn install --production

FROM node:16-stretch-slim
WORKDIR /usr/app
COPY --from=builder /usr/app/node_modules ./node_modules
COPY . .

ENV ENV=development
ENV NODE_ENV=production
ENV API_PORT=3000

EXPOSE 3000
CMD ["node", "server.js"]