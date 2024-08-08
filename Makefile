all:
	@echo "make [option]"

build:
	pandoc -o main.html README.md

test: build
	python3 -m http.server
