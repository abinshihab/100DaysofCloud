![image](https://github.com/abinshihab/100DaysofCloud/assets/22618390/8f66d63a-1d37-412d-a6c8-483a555080ca)

# ECS Cats and Dogs Workshop

## Introduction

In this workshop, I will build and deploy a containerized/auto-scaling web application that will randomly display a cat picture, or dog picture (depending on what the user selects). We will also implement container observability tools, perform load testing on the web application, and monitor the outcome

## Prerequisite

- AWS Account
- Required Foundational understanding of containers and Amazon Elastic Container Service (ECS) and Amazon Elastic Container Registry (ECR) is ideal.

## Use Case

- ![image](https://github.com/abinshihab/100DaysofCloud/assets/22618390/4c011f90-e970-4817-9eab-a7ddbe43d222)

- We will use AWS CloudFormation  to automatically deploy a Virtual Private Cloud , and the required public/private subnets and route tables. The majority of this workshop will be done manually through the AWS Console, but we will be building Docker images using AWS Cloud9  which is a cloud-based integrated development environment (IDE) that lets you write, run, and debug your code with just a browser.

Additionally, we will be using AWS FireLens , which will allow us to direct container logs to storage and analaytics tools without modifying our deployment scripts or installing extra software/writing additional code.

Take note of the Application Load Balancer (ALB)  and the Auto Scaling group  which we will configure to handle scaling of resources

## Cloud Research

- I faced some issue while I'm trying to deploy CI/CD.Also,I had some issue while I'm tring to create a service in ALB
  the lisenr was creatd in reagoin  
- 

## Try yourself
Here some screenshot of my result 
LoadBalancer screenshot
![image](https://github.com/abinshihab/100DaysofCloud/assets/22618390/5a89d23c-b2fe-471d-a7fe-4f261fdc06d1)

CloudWatch screenshot
![image](https://github.com/abinshihab/100DaysofCloud/assets/22618390/5fe6c41b-4b98-40ca-af21-b19bba15b200)

CloudWatch Query in log insights
![image](https://github.com/abinshihab/100DaysofCloud/assets/22618390/ae1ee124-d8d0-49db-95b3-75585277e49b)
![image](https://github.com/abinshihab/100DaysofCloud/assets/22618390/2aeef153-ff85-4390-934c-4257dacdeb87)


### Step 1 — Summary of Step
I followed up the steps of workshop 

Workshop link
https://catalog.us-east-1.prod.workshops.aws/workshops/8c9036a7-7564-434c-b558-3588754e21f5/en-US/01-intro



## ☁️ Cloud Outcome

- Created a simple containerized application ECS Cats and Dogs on Amazon ECS
- Launched an EC2 based and a Fargate based service
- Created, Pushed, and managed Docker images of cats and dogs with Amazon ECR.
- Centralized and routed our container logging using Amazon CloudWatch.
- Monitored our ECS cluster, services, and tasks with Amazon CloudWatch Container Insights.
- Set up ECS service and cluster Auto Scaling to automatically adjust our resources to help ensure predictable performance in the most cost-optimized manner
- Created pipeline for continuous integration and deployment using AWS CodePipepline
## Next Steps

Create the whole application with CI/CD in terraform file.

## Social Proof

✍️ Show that you shared your process on Twitter or LinkedIn

[link]
