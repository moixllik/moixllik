run:
	@npx wrangler dev --test-scheduled

deploy:
	@npx wrangler deploy

test-triggers:
	@curl "http://localhost:8787/__scheduled?cron=*+*+*+*+*"