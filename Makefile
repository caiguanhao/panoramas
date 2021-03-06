all: clean js css

js:
	cd js/vendor && \
	uglifyjs \
	bootstrap-custom.js \
	jquery.transit.js \
	jquery.leanorama.js \
	jquery.leanorama.hotspot.js \
	jquery.leanorama.controlbar.js \
	jquery.leanorama.infobox.js \
	../main.js \
	> leanorama.min.js

css:
	cd css/vendor && lessc --clean-css main.less > main.css

clean:
	rm -f js/vendor/leanorama.min.js css/main.css

s:
	python -m SimpleHTTPServer

.PHONY: all js css clean s
