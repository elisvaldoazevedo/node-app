# Usage 

docker-compose.yml
'''

version: "3.3"

services:
  minha-web-app:
    build: .
    image: node-web-app:0.2

    ports:
      - 49160:8080

networks:
  default:
    external:
      name: local_default

      