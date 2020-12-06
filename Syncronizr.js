const youtubedl = require("youtube-dl");
const fs = require("fs");
const { SERVE_PORT, DOWNLOAD_PATH, HOSTNAME } = require("./config");
class Sincronizr {
  constructor(mopidy, device) {
    this.mopidy = mopidy;
    this.device = device;
  }

  play(tl_track) {
    const track = tl_track.track;

    let { uri, comment } = track;
    if (uri.startsWith("youtube")) {
      const playYoutube = (err) => {
        console.log(err)
        this.device.play(`http://${HOSTNAME}:${SERVE_PORT}/serve/${comment}.mp3`);
      };
      if (fs.existsSync(`${DOWNLOAD_PATH}/${comment}.mp3`)) {
        playYoutube();
        return;
      }
      youtubedl.exec(
        `http://www.youtube.com/watch?v=${comment}`,
        ["-x", "--audio-format", "mp3", "-o", `${DOWNLOAD_PATH}/%(id)s.%(ext)s`],
        {},
        playYoutube
      );

      return;
    }
    this.device.play(uri);
  }

  seek(seconds) {
    this.device.seek(seconds);
  }

  volume(volume) {
    this.device.setVolume(volume);
  }
}

module.exports = Sincronizr;
