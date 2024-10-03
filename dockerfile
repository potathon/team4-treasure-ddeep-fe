FROM node:20-alpine AS build

WORKDIR /app

ARG REACT_APP_SERVER_URL

ENV REACT_APP_SERVER_URL=${REACT_APP_SERVER_URL}

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

#-------------------
FROM node:20-alpine

RUN npm install -g serve

WORKDIR /app

COPY --from=build /app/build .

EXPOSE 3000

CMD ["serve", "-s", ".", "-l", "3000"]
