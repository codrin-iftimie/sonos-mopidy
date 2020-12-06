build:
	(cd iris && docker build -f Dockerfile -t sonos-iris .)
	(docker build -f Dockerfile -t sonos-mopidy .)
