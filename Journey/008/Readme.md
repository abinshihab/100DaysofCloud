
# Deploy 3-tier application 

## Introduction

I did this workshop as a part of 10 weeks of cloudops challenge. 

## Prerequisite

- AWS Account 

## Use Case

- 🖼️ ![image](https://github.com/abinshihab/100DaysofCloud/assets/22618390/e49fe2b7-4f69-4212-8334-72e1470bd503)

- In this architecture, a public-facing Application Load Balancer forwards client traffic to our web tier EC2 instances. The web tier is running Nginx webservers that are configured to serve a React.js website and redirects our API calls to the application tier’s internal facing load balancer. The internal facing load balancer then forwards that traffic to the application tier, which is written in Node.js. The application tier manipulates data in an Aurora MySQL multi-AZ database and returns it to our web tier. Load balancing, health checks and autoscaling groups are created at each layer to maintain the availability of this architecture.

## Cloud Research

- ✍️ I stuck with some error while I'm trying to invoke the transaction of DB. I got some error 
- 🖼️ Show as many screenshot as possible so others can experience in your cloud research.

## Try yourself


### Step 1 — Summary of Step

I follow up the below workshop from AWS and video from youtube

https://catalog.us-east-1.prod.workshops.aws/workshops/85cd2bb2-7f79-4e96-bdee-8078e469752a/en-US

https://www.youtube.com/watch?v=amiIcyt-J2A&list=PLl4APkPHzsUUc8HOEIwfB3Z2uxRv2SKOG&index=6

## ☁️ Cloud Outcome

✍️ I learned about all services required to spine up the application 

## Next Steps

Using terraform to deploy 3-tier application

## Social Proof

✍️ Show that you shared your process on Twitter or LinkedIn

[link](link)
