# Scalable event-driven applications with NestJS (demo)

Join me for a talk on developing scalable event-driven applications with NestJS.

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

Start the stack: \
`docker-compose up -d`

Stop the stack: \
`docker-compose down`
