FROM www.cybage-docker-registry.com:9080/jenkins_node_slave:1.3

#making working directory
RUN mkdir -p /data/angularApp
# Define working directory.
WORKDIR /data/angularApp

#copy soruce code
ADD bin bin
ADD CentOS_registry_setup CentOS_registry_setup
ADD connection connection
ADD coverage coverage
ADD js js
ADD min min
ADD mochawesome-reports mochawesome-reports
ADD nightwatchReports nightwatchReports
ADD node_modules node_modules
ADD public public
ADD reports reports
ADD routes routes
ADD share share
ADD tests tests
ADD views views

#adding files
ADD app.js gruntfile.js jadeNotes.txt jshint-report.html nightwatch.js package.json report.html selenium-server-standalone-2.47.1.jar viewAll.js ./

# Define default command.
CMD ["bash"]

#expose port
EXPOSE 3000

