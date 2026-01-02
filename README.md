# Deploying an React.js based Digital Portfolio using DevOps Tools

# A. GitHub

> git init
> git add .
> git commit -m "Initial React Commit"
> git branch -M main
> git remote add origin <git-repository-url>
> git push origin main

# Verify Docker and Java JDK
> docker --version
> java --version

# B. Docker

> touch Dockerfile.backend
> cd frontend > touch Dockerfile
>
> docker build -t mern-backend -f Dockerfile.backend
> docker build -t mern-frontend ./frontend
>
> docker tag mern-backend:latest sarthakmatte1/mern-backend:latest
> docker tag mern-frontend:latest sarthakmatte1/mern-frontendend:latest
>
> docker push sarthakmatte1/mern-backend:latest
> docker push sarthakmatte1/mern-frontend:latest

# C. Kubernetes

>minikube version
>minikube start
>kubectl get nodes
>kubectl cluster-info
>
>mkdir k8s
>cd k8s
>cd k8s
>touch backend-deployment.yaml backend-service.yaml frontend-deployment.yaml frontend-service.yaml
>touch mongo-deployment.yaml mongo-service.yaml
>
>kubectl apply -f k8s/
>kubectl get pods
>kubectl get svc
>minikube service frontend-service

# D. Jenkins

>docker run -d \
  --name jenkins \
  -p 8080:8080 \
  -p 50000:50000 \
  -v jenkins_home:/var/jenkins_home \
  -v /var/run/docker.sock:/var/run/docker.sock \
  jenkins/jenkins:lts
> docker logs jenkins

*http://localhost:8080*
*Install Suggested Plugins*
*Jenkins Dashboard*

*Jenkins Dashboard*->Manage Jenkins->Plugins->Available->Docker Pipeline and GitHub Integration
*Jenkins Dashboard*->New Item->Pipeline Script
              Pipeline Name->
              pipeline {
                agent any
                stages {
                  stage('Test Docker') {
                    steps {
                      sh 'docker ps'
                    }
                  }
                }
              }
->Build Now.

