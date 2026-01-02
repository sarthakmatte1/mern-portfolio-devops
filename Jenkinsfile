pipeline {
  agent any

  environment {
    DOCKER_USER = "sarthakmatte1"
    FRONTEND_IMAGE = "mern-frontend"
  }

  stages {

    stage("Clone Repository") {
      steps {
        git branch: "main",
            url: "https://github.com/sarthakmatte1/mern-portfolio-devops.git"
      }
    }

    stage("Build Frontend Image") {
      steps {
        sh """
        docker build -t \$DOCKER_USER/\$FRONTEND_IMAGE:latest ./frontend
        """
      }
    }

    stage("Push Image to Docker Hub") {
      steps {
        withCredentials([usernamePassword(
          credentialsId: 'dockerhub-creds',
          usernameVariable: 'DOCKER_USERNAME',
          passwordVariable: 'DOCKER_PASSWORD'
        )]) {
          sh """
          echo \$DOCKER_PASSWORD | docker login -u \$DOCKER_USERNAME --password-stdin
          docker push \$DOCKER_USER/\$FRONTEND_IMAGE:latest
          """
        }
      }
    }

    stage("Deploy Frontend to Kubernetes") {
      steps {
        sh """
        kubectl apply -f k8s/frontend-deployment.yaml
        kubectl apply -f k8s/frontend-service.yaml
        kubectl rollout restart deployment frontend-deployment
        """
      }
    }
  }
}
