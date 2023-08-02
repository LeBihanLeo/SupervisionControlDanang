pipeline {
    agent any

    stages {
        stage('Start container') {
            steps {
                sh 'echo "Start container..."'
				sh 'ls -l'
				sh 'chmod -R 757 .'
				
				script {
					try {
						sh 'docker stop influxdb grafana openhab mqtt nginx myfakeapi'
					} catch (Exception e) {
						echo "no container running"
					}
				}
				
				sh 'docker compose up -d influxdb grafana openhab mqtt web myfakeapi'
            }
        }

        stage('Test') {
            steps {
                sh 'echo "Testing..."'				
            }
        }
    }
}