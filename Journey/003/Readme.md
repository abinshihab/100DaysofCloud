
![placeholder image](https://github.com/abinshihab/100DaysofCloud/blob/main/Journey/003/AWS_Step_Workflow.jpeg)

# Create a Serverless Workflow with AWS Step Functions and AWS Lambda

## Introduction

✍️ We will use AWS Step Funcitons with lambda functions to automate the process of call center appliction developemnt 

## Prerequisite

✍️ We nee AWS Account, AWs Step Functions and AWS lambda

## Use Case

- ✍️ We will use AWS Step function to orc the process of call center and make coordinate multiple Lambda functions into flexible workflows that are easy to debug and change

## Cloud Research

- ✍️ I tried AWS tutorial 

[link](https://aws.amazon.com/getting-started/hands-on/create-a-serverless-workflow-step-functions-lambda/?ref=gsrchandson&id=updated)


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


[linkedin](https://www.linkedin.com/posts/eng-ahmed-hussein-bin-shehab-86285560_github-abinshihab100daysofcloud-activity-7012725012994363392-QZrT?utm_source=share&utm_medium=member_desktop)
