

# Write less code: Building applications with a serverless mindset

## Introduction

Today,I create a translation application. The application uses Amazon Translate  to translate a text into a different language. After translating the text, the application saves the result into an Amazon DynamoDB  table. The application uses the DynamoDB table before translating to make sure that the same text was not translated before. If it was, it uses the saved value. If it wasn't, it translates the text and saves it into the database.

## Prerequisite

- AWS account
- IAM Role.
- Amazon DynamoDB table.
- AWS Step Functions State Machine.

## Use Case

- https://static.us-east-1.prod.workshops.aws/public/54350d32-beba-460b-a043-0c672241bad5/static/images/introduction/1-architecture.png![image](https://github.com/abinshihab/100DaysofCloud/assets/22618390/19e3338b-bc9a-48c3-be53-bb8b6b099f68)

- I will build Step Functions state machine to translate the text. Then, integrate with API Gateway to expose the functionality. Finally, I wil invoke the state machine from an SQS queue using EventBridge Pipes

## Cloud Research

- I had some issue while I'm creating and deployment AWS API Gateway. I fix them by copy the correct IAM role ARN.

## Try yourself

✍️ Add a mini tutorial to encourage the reader to get started learning something new about the cloud.

### Step 1 — Summary of Step

I followed the same workshop of Building applications with a serverless mindset from AWS as blow:
https://catalog.workshops.aws/svsmindsetapps/en-US/10-introduction


## ☁️ Cloud Outcome

I learn how to create and use AWS Step funtion 

## Next Steps

Use SAM template to create the Step Functions state machine and the resources needed for the translation API.

## Social Proof

- Linkedin
[link]https://www.linkedin.com/posts/ahmedshihab2023_write-less-code-building-applications-with-activity-7164346734956032000-9ZlO?utm_source=share&utm_medium=member_desktop(link)
