run:
	python3 -m http.server

save:
	@git add .
	@git commit -m $(shell date -Iseconds)
	@git push origin main
