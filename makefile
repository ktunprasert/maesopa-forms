.PHONY: start

start:
	docker-compose up -d && docker-compose logs sk -f
