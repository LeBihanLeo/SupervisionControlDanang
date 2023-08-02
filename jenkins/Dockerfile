# Dockerfile of the jenkins docker-image
FROM jenkins/jenkins:2.60.3
USER root

# Dependencies
RUN apt-get update
RUN apt-get upgrade -y
RUN apt-get install -y curl tar gzip

# Docker
RUN curl -fsSL https://get.docker.com -o get-docker.sh
RUN sh get-docker.sh
# RUN service docker start

# USER jenkins
USER jenkins