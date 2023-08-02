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
						echo "no container running"
					}
				}
				
				docker rm $(docker ps -aq)
				sh 'docker compose up -d'
            }
        }

        stage('Test') {
            steps {
                sh 'echo "Testing..."'				
            }
        }
    }
}