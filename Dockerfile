FROM www.cybage-docker-registry:9080/nodebase

RUN npm install gulp-cli -g
RUN npm install gulp

# Define working directory.
WORKDIR /data

# Define default command.
CMD ["bash"]
