start:
	docker-compose up -d

stop:
	docker-compose down

watch:
	docker logs -f conf42-event-driven-nestjs-demo_worker_1