# Upload Kittens Lambda Function

This is a simple implementation of an [AWS Lambda Function](https://aws.amazon.com/lambda/)
managed by [`apex`](http://apex.run).

To get started, [create an AWS account](https://aws.amazon.com/free/).
A credit card is required, but you are likely to operate in
the free tier.

Create a role for the lambda function to use. Get the role
arn and add it to `project.json` for apex.

Now, you can use `apex deploy` to upload the lambda
function. The source code is pure JavaScript and is built
with webpack to run on the target node 4.3 environment.

## Resources

* [Lambda Function Handler Documentation from AWS](http://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-handler.html)
