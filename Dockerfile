FROM node:15.3

RUN apt update
RUN apt install ffmpeg -y

RUN mkdir -p /downloads

COPY . /app

RUN cd /app && npm ci

CMD node /app/index.js
