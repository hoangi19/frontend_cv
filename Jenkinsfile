pipeline {
    agent {
        docker {
            image 'node:lts-bullseye-slim' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'yarn'
                sh 'yarn build'
                sh 'yarn test --passWithNoTests --watchAll=false'
            }
        }
    }
}