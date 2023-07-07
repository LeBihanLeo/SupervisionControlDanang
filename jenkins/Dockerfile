# Dockerfile of the jenkins docker-image
FROM jenkins/jenkins
USER root

# Dependencies
RUN apt-get update && apt-get install -y curl tar gzip

# Docker
RUN curl -fsSL https://get.docker.com -o get-docker.sh
RUN sh get-docker.sh

USER jenkins