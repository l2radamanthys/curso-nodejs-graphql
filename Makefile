install:
	@npm install

run:
	@npm run dev

postgre_start:
	@docker-compose up -d postgres

postgre_stop:
	@docker-compose down
