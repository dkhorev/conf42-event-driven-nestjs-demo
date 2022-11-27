# Scalable event-driven applications with NestJS (demo)

Join me for a talk on developing [scalable event-driven applications with NestJS](https://www.conf42.com/JavaScript_2022_Dmitry_Khorev_scalable_eventdriven_applications_nestjs).

A transcript for my talk can be found here [Medium - Build Scalable Event-Driven Applications With Nest.js]().

If you’ve never tried NestJS - I’ll talk briefly about its advantages and use cases it can solve for you.

We’ll explore a hands-on example of scalability issues that can happen and the common approaches to solving them.

Thanks and see you.

### Starting the app

Install dependencies: \
`npm i`

Pull Redis container: \
`docker pull redis:7-alpine`

Build the application container: \
`DOCKER_BUILDKIT=1 docker build --pull -t conf42-demo -f docker/Dockerfile .`

Start the stack: use Makefile commands

```makefile
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
```
