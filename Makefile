start:
	docker-compose up -d

stop:
	docker-compose down

start-issue1:
	docker-compose -f docker-compose-issue1.yml up -d

stop-issue1:
	docker-compose -f docker-compose-issue1.yml down

start-step1:
	docker-compose -f docker-compose-step1.yml up -d

stop-step1:
	docker-compose -f docker-compose-step1.yml down

start-step2:
	docker-compose -f docker-compose-step2.yml up -d

stop-step2:
	docker-compose -f docker-compose-step2.yml down

watch:
	docker logs -f conf42-event-driven-nestjs-demo_worker_1

watch-cron:
	docker logs -f conf42-event-driven-nestjs-demo_cron_1

monitor:
	npm run start:monitor