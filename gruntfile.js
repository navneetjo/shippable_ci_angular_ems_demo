module.exports=function(grunt){

grunt.initConfig({

				
				clean: {
					  build: {
								src: ["reports/*.js"]
							}
					},
				
				//minified the source file 	
				minified : {
									files: {
											src: [
											  'viewAll.js','/public/html/*.js'                
											  
											],
									dest: 'js/minified/'
											}
									},
				//uglify the js files 
				uglify:{
					dist: {
								src: ['viewAll.js','/public/html/*.js'],
								dest: 'min/ems.min.js'
					   	  }
									
					}, 
				//to validate files and syntax checking
				jshint: {
						files: ['viewAll.js','/public/html/*.js'],
							options:{
										reporter:require('jshint-html-reporter'),
										reporterOutput:'jshint-report.html',
										


											globals:{
													jQuery: true,
													reporteroutput : 'jshint-stylish'
												}
									}
					},
					
				nightwatch :{
								
									standalone: true,
									jar_path: './selenium-server-standalone-2.47.1',
									
																					src_folders: ['tests/emsTestSuite/*'],
  							output_folder: 'reports/emsTestSuiteReports'

							},
					
				nightwatch_report: {
						files: ['reports/emsTestSuiteReports/*.xml'],
									options: {
												outputDir: 'nightwatchReports/html-reports'
											 }
									},
				
				
				mochaTest: {
							reportAll: {
										options: {
													reporter: 'mochawesome'
												  },
										src: ['tests/mochaTestSuite/**/*.js']
										}
							},
				mocha_istanbul :{

							coveralls:	{
									
										src: ['tests/mochaTestSuite/**/*.js'], 
               									 options: {
									                    coverage:true, // this will make the grunt.event.on('coverage') event listener to be triggered 
                   										 check: {
										                        lines: 75,
										                        statements: 75
                    											},
									                    root: './tests', // define where the cover task should consider the root of libraries that are covered by tests 
									                    reportFormats: ['cobertura','lcovonly','html']
											    
                									}
           								 }				
									

						},
run_java : {

		options: { //Default is true 
      stdout: false,
      stderr: false,
      stdin: false,
      failOnError: false
    },
 shell: {
        multiple: {
            command: [
                'java -jar selenium-server-standalone-2.47.1.jar ',
                'node nightwatch',
            ].join('&&')
        }
    }
	
	},
nodemon: {
  dev: {
    script: 'viewAll.js'
  }
}
				/*
				mocha: 	{
						test: {
									options: {
												reporter: 'good-mocha-html-reporter',
												run : true,
												log : true
											 },
									src: ['./tests/mochaTestSuite/*.js'],
									dest: ['./test/mochaTestSuite/outputMocha']
							  }
						}
				
				mochaTest:
				{
					mochawesome :
									 reporter: 'mochawesome',
										reporterOptions: {
										  reportDir: 'customReportDir',
										  reportName: 'customReportName'
										}
				
				
				}
			
		        mochaTest: {
							'mochawesome': {
											options: {
														reporter: 'mochawesome',
														captureFile: 'mocha-output.html', // Optionally capture the reporter output to a file 
														quiet: false, // Optionally suppress output to standard out (defaults to false) 
														clearRequireCache: false // Optionally clear the require cache before running tests (defaults to false) 
													 },
											src: ['test\\*.js']
											}
							}
				
				
			
				//run predefined tasks when the files changes
				watch : {
							files : ['src/*.js'],
							tasks : ['jshint'],
							options :	{
										
											spawn : true
										}
				
						},
				//for concatenating files
				concat : 	{
								dist :  {
											src : ['src/*.js'],
											dest : 'concate/concat.js'
										
										},
								options : 	{
												
												separator : '\n/* this is before new file separate \n'
											}
				
							},
				
				mocha: {
						all: {
								src: 'test/*.js',
								options: {
											reporter: 'nyan'
										  }
							 }
						},
					
					
				//run mocha test cases
				simplemocha: {
							  options: {
								  globals: ['chai'],
								  timeout: 3000,
								  ignoreLeaks: false,
								  reporter: 'mochawesome'
							},
							all: { src: ['test/calTest.js'] }
							},
				//sonar for static code analysis		
				sonarRunner: {
								analysis: {
											options: {
											debug: true,
											separator: '\n',
														sonar: {
																host: {
																		url: 'http://localhost:9000'
																		},
																jdbc: {
																	url: 'jdbc:mysql://localhost:3306/sonar',
																	username: 'root',
																	password: 'root'
																	 },
 
																	projectKey: 'sonar:grunt-sonar-runner:4.5.4',
																	projectName: 'caldemo',
																	projectVersion: '1.0.0',
																	sources: ['test'].join(','),
																	language: 'js',
																	sourceEncoding: 'UTF-8'
																}
													}
											}
							}
						*/
				
						

});
///////load plugins/////////////

/*
grunt.loadNpmTasks('grunt-contrib-clean');
grunt.loadNpmTasks('grunt-contrib-jshint');
//grunt.loadNpmTasks('grunt-mocha');
//grunt.loadNpmTasks('mochawesome');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-simple-mocha');
//grunt.loadNpmTasks('mocha-real-json-reporter');
grunt.loadNpmTasks('grunt-sonar-runner');
grunt.loadNpmTasks('grunt-minified'); */

grunt.loadNpmTasks('grunt-minified');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-clean');
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-nightwatch');
grunt.loadNpmTasks('grunt-nightwatch-report');
grunt.loadNpmTasks('grunt-mocha-istanbul');
grunt.loadNpmTasks('grunt-run-java');

grunt.loadNpmTasks('grunt-nodemon');
grunt.loadNpmTasks('mochawesome');
//grunt.loadNpmTasks('good-mocha-html-reporter');
grunt.loadNpmTasks('grunt-mocha-test');
//////////////////////register the tasks////////////////
//grunt.registerTask('default', ['jshint','concat','simplemocha']);
grunt.registerTask('default', ['clean','jshint','minified','uglify','mochaTest','mocha_istanbul']);

grunt.registerTask('cdNightwatch', ['nightwatch','nightwatch_report']);
grunt.registerTask('run', ['nodemon']);

};
