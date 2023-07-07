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
						sh 'docker compose down'
					} catch (Exception e) {
						echo "no copntainer running"
					}
				}
				
				docker compose up -d
            }
        }

        stage('Test') {
            steps {
                sh 'echo "Testing..."'*
				mosquitto_pub -h 45.117.83.209 -m "test message" -t mytest/test -u test -P "test" -d				
            }
        }
    }
}