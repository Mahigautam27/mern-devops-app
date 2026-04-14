pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/Mahigautam27/mern-devops-app.git'
            }
        }

        stage('Build Docker') {
            steps {
                sh 'docker-compose build'
            }
        }

        stage('Run Docker') {
            steps {
                sh 'docker-compose up -d'
            }
        }
    }
}
