# mopidy-sonos

Sync your mopidy iris player with a Sonos controller.

## Features
 - youtube videos
 - iris player
 - node-sonos connection

## Installation
 - download the source
 - `mv iris/mopidy.example.conf iris/mopidy.conf`
 - inside your `iris/mopidy.conf` configure your Spotify credentials https://mopidy.com/ext/spotify/
 - `make build`
 - `mv docker-compose.example.yml docker-compose.yml`
 -  overwrite your `SONOS_DEVICE` and `HOSTNAME` for the services
 - `docker-compose up`
