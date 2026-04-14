pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git branch: 'main', url: 'https://github.com/Mahigautam27/mern-devops-app.git'
            }
        }

        stage('Build Docker') {
            steps {
                bat 'docker-compose build'
            }
        }

        stage('Run Docker') {
            steps {
                bat 'docker-compose up -d'
            }
        }
    }
}
