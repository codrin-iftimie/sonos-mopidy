FROM node:15.3

RUN apt update
RUN apt install ffmpeg -y

RUN mkdir -p /downloads

COPY . /app

RUN cd /app && YOUTUBE_DL_DOWNLOAD_HOST=http://yt-dl.org/downloads/latest/youtube-dl npm ci

CMD node /app/index.js
