
ZIP = ./dist/ugly-http.zip
SOURCE_FILES = \
	./manifest.json \
	./src/* \
	./src/**/*

# Target name is expand to assist zsh autocomplete.
${ZIP}: ${SOURCE_FILES} clean
	echo ${SOURCE_FILES}
	mkdir -p ./dist
	zip ${ZIP} ${SOURCE_FILES}

.PHONY: clean
clean:
	rm -rf ./dist

.PHONY: reset
reset:
	rm -rf ./node_modules
