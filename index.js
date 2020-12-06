const { Sonos } = require("sonos");
const express = require("express");
const Syncronizr = require("./Syncronizr");
const { SERVE_PORT, MOPIDY_URL, MOPIDY_PORT, SONOS_DEVICE, DOWNLOAD_PATH } = require("./config");
const Mopidy = require("mopidy");

const app = express();
// TODO mopidy also downloads the files I think, maybe it's better to find them there
app.use("/serve", express.static(DOWNLOAD_PATH));
app.listen(SERVE_PORT);

const mopidy = new Mopidy({
  webSocketUrl: `ws://${MOPIDY_URL}:${MOPIDY_PORT}/mopidy/ws/`,
  autoConnect: false,
});

const device = new Sonos(SONOS_DEVICE);
mopidy.connect();

const sync = new Syncronizr(mopidy, device);

mopidy.on("event", (name, ev) => {
  if (name === "event:trackPlaybackStarted") {
    sync.play(ev.tl_track);
  }

  if (name === "event:seeked") {
    sync.seek(ev.time_position / 1000);
  }

  if (name === "event:volumeChanged") {
    sync.volume(ev.volume);
  }
});
