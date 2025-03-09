ZIP = ./dist/ugly-http.zip
SOURCE_FILES = \
	./manifest.json \
	./src/* \
	./src/**/*

.PHONY: build
build: ${ZIP}

# Target name is expand to assist zsh autocomplete.
${ZIP}: setup ${SOURCE_FILES} clean
	echo ${SOURCE_FILES}
	mkdir -p ./dist
	zip ${ZIP} ${SOURCE_FILES}

.PHONY: setup
setup:
	bun install --frozen-lockfile

.PHONY: clean
clean:
	rm -rf ./dist

.PHONY: reset
reset:
	rm -rf ./node_modules
