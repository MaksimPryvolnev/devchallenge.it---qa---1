FROM jenkinsci/jenkins:lts

USER root

RUN rm /bin/sh && ln -s /bin/bash /bin/sh

# Install curl so that we can clone NVM to help
# us manage multiple versions of node
RUN apt-get update && \
    apt-get install -y curl && \
    apt-get -y autoclean

# set some environment variables that we'll use
# a little further down to install NVM and Node
ENV NVM_DIR /usr/local/nvm
ENV NVM_VERSION 0.31.2
ENV NODE_VERSION 8.11.0

# install nvm for easier nodejs version management
# https://github.com/creationix/nvm#install-script
RUN curl --silent -o- https://raw.githubusercontent.com/creationix/nvm/v$NVM_VERSION/install.sh | bash

# install node and npm
RUN source $NVM_DIR/nvm.sh && \
    nvm install $NODE_VERSION && \
    nvm alias default $NODE_VERSION && \
    nvm use default

# add node and npm to path so the commands are available
ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

