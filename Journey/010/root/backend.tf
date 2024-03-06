terraform {
  backend "s3" {
    bucket = "tfstat-benshehab"
    key    = "backend/10weeksofcloudops-demo.tfstate"
    region = "us-east-1"
    dynamodb_table = "dynamo-demo"
  }
}