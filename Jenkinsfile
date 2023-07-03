pipeline {
    agent any

    stages {
        stage('Connect to GitHub') {
            steps {
                git 'https://github.com/LeBihanLeo/SupervisionControlDanang.git'
            }
        }

        stage('Build') {
            steps {
                sh 'echo "Building..."'
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
