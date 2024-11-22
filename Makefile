run:
	python3 -m http.server

run-worker:
	@npx wrangler dev --test-scheduled

deploy-worker:
	@npx wrangler deploy

test-triggers:
	@curl "http://localhost:8787/__scheduled?cron=*+*+*+*+*"
