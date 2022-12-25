**Add a cover photo like:**
![placeholder image](https://via.placeholder.com/1200x600)

# Create a Serverless Workflow with AWS Step Functions and AWS Lambda

## Introduction

✍️ We will use AWS Step Funcitons to automate the process of call center appliction developemnt 

## Prerequisite

✍️ We nee AWS Account, AWs Step Function and AWS lambda

## Use Case

- 🖼️ (Show-Me) Create an graphic or diagram that illustrate the use-case of how this knowledge could be applied to real-world project
- ✍️ We will use AWS Step function to orc the process of call center and make coordinate multiple Lambda functions into flexible workflows that are easy to debug and change

## Cloud Research

- ✍️ Document your trial and errors. Share what you tried to learn and understand about the cloud topic or while completing micro-project.
- 🖼️ Show as many screenshot as possible so others can experience in your cloud research.

## Try yourself

✍️ The process.

### Step 1 — Create an AWS Identity and Access Management (IAM) role for Step function

![Screenshot](https://github.com/abinshihab/100DaysofCloud/blob/main/Journey/003/IAM_01.jpeg)
![Screenshot](https://github.com/abinshihab/100DaysofCloud/blob/main/Journey/003/IAM_02.jpeg)

### Step 2 — Create a state machine and serverless workflow
Create more than one function,One to create a support case another to assign the case to a support representative for resolution and so on.
![Screenshot](https://github.com/abinshihab/100DaysofCloud/blob/main/Journey/003/Create_State_Machine_1.jpeg)
![Screenshot](https://github.com/abinshihab/100DaysofCloud/blob/main/Journey/003/Create_State_Machine_2.jpeg)
![Screenshot](https://github.com/abinshihab/100DaysofCloud/blob/main/Journey/003/Create_State_Machine_3.jpeg)


### Step 3 — Create Lambda Functions

![Screenshot](https://github.com/abinshihab/100DaysofCloud/blob/main/Journey/003/Create_Lambda_Functions.jpeg)

Update permission for each function
![Screenshot](https://github.com/abinshihab/100DaysofCloud/blob/main/Journey/003/State_Machine_Permission.jpeg)


### Step 4 - Populate the workflow by update lambda function in state machine file.

Update the ARN number for each function

![Screenshot](https://github.com/abinshihab/100DaysofCloud/blob/main/Journey/003/Update_function_ARN_in_state_machine.jpeg)


### Step 5 - Execute the workflow

Execute the workflow with failed result 
![Screenshot](https://github.com/abinshihab/100DaysofCloud/blob/main/Journey/003/Workflow_Result_Failed.jpeg)

Execute the workflow with successed result 
![Screenshot](https://github.com/abinshihab/100DaysofCloud/blob/main/Journey/003/Workflow_Result_%20Succeeded.jpeg)
## ☁️ Cloud Outcome

✍️ I learnd how to create workflow of AWS steps and connect lambda functions .

## Next Steps

✍️ Integrate the workflow with AWS SNS and AWS SQS services.

## Social Proof

✍️ Show that you shared your process on Twitter or LinkedIn

[link](link)
