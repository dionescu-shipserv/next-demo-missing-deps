ARG APP=next-demo
ARG APP_DIR=/usr/src/app

# Build Stage
FROM node:12-alpine as build-stage
ARG APP
ARG APP_DIR
ENV APP=$APP
ENV APP_DIR=$APP_DIR

RUN apk add python make build-base bash git

RUN mkdir -p ${APP_DIR}
WORKDIR ${APP_DIR}

COPY package.json yarn.lock ${APP_DIR}/
RUN yarn

COPY . .
ENV NODE_ENV=production
RUN yarn build ${APP} --prod

# Run Stage
FROM node:12-alpine
ARG APP
ARG APP_DIR

ENV APP=$APP
ENV APP_DIR=$APP_DIR
ENV NODE_ENV=production

COPY --from=build-stage ${APP_DIR}/dist/apps/${APP} ${APP_DIR}
WORKDIR ${APP_DIR}
RUN apk add bash & npm i

EXPOSE ${PORT}

CMD yarn start -p $PORT