start:
	docker-compose up -d

stop:
	docker-compose down
	docker-compose down -f docker-compose-step1.yml
	docker-compose down -f docker-compose-step2.yml

start-step1:
	docker-compose -f docker-compose-step1.yml up -d

start-step2:
	docker-compose -f docker-compose-step2.yml up -d

watch:
	docker logs -f conf42-event-driven-nestjs-demo_worker_1

monitor:
	npm run start:monitor