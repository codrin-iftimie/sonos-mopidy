# mopidy-sonos

**Current status**: Usable. In development

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
 - the service should run on port 6680

## TODO
 - [] Currently the youtube mp3 file is created and served when the track changes. Should be done when the playlist changes
 - [] Queue the entire playlist to the sonos device to enable Alexa commands for "next song"
 - [] Maybe remove any audio output from mopidy, since it's used to only sync up the Sonos controller
 - [] Check if mopidy downloads mp3 files, if so serve them instead downloading our own
 - [] Sync Sonos controller back to the mopidy controller.
