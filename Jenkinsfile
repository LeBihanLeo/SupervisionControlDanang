pipeline {
    agent any

    stages {
        stage('Start container') {
            steps {
                sh 'echo "Start container..."'
				sh 'ls -l'
				sh 'chmod -R 757 .'
                sh 'ls -'
                sh 'docker compose down'
            }
        }

        stage('Test') {
            steps {
                sh 'echo "Testing..."'
            }
        }

        stage('Deploy') {
            steps {
                sh 'echo "Deploying..."'
            }
        }
    }
}