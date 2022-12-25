{
  "Comment": "A simple AWS Step Functions state machine that automates a call center support session.",
  "StartAt": "Open Case",
  "States": {
    "Open Case": {
        "Type": "Task",
        "Resource": "arn:aws:lambda:us-west-2:991731688366:function:OpenCaseFunction",
        "Next": "Assign Case"
   },
   "Assign Case": {
        "Type": "Task",
        "Resource": "arn:aws:lambda:us-west-2:991731688366:function:AssignCaseFunction",
        "Next": "Work on Case"
   },
   "Work on Case":{
        "Type": "Task",
        "Resource": "arn:aws:lambda:us-west-2:991731688366:function:WorkOnCaseFunction",
        "Next": "Is Case Resolved"
   },
   "Is Case Resolved": {
        "Type" : "Choice",
        "Choices": [
            {
             "Variable": "$.Status",
             "NumericEquals": 1,
             "Next": "Close Case"
            },
            {
             "Variable": "$.Status",
             "NumericEquals": 0,
             "Next": "Escalate Case"
            }
        ]
   },
   "Close Case": {
        "Type": "Task",
        "Resource": "arn:aws:lambda:us-west-2:991731688366:function:CloseCaseFunction",
        "End": true
  },
   "Escalate Case": {
        "Type": "Task",
        "Resource": "arn:aws:lambda:us-west-2:991731688366:function:EscalateCaseFunction",
        "Next": "Fail"
  },
    "Fail": {
        "Type": "Fail",
        "Cause": "Engage Tier 2 Support." }
  }
}