FROM node:8.11.0-alpine
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . .