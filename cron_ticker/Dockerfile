# BUILDX
# docker buildx build --platform linux/amd64,linux/arm64,linux/arm/v7 \
#    -t klerith/cron-ticker:latest --push .

# /app /usr /lib
# FROM --platform=linux/amd64 node:19.2-alpine3.16
# FROM --platform=$BUILDPLATFORM node:19.2-alpine3.16

FROM node:alpine3.17

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run test

RUN rm -rf tests && rm -rf node_modules

RUN npm install --prod

CMD [ "node", "app.js" ] 