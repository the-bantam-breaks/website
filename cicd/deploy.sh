#!/bin/bash

TAG=$1
REPOSITORY=796520576045.dkr.ecr.us-east-1.amazonaws.com/the-bantam-breaks/breaks-website
IMAGE=${REPOSITORY}:${TAG}
ECS_CLUSTER=bantam-breaks
ECS_SERVICE=website
DIR=“$( cd “$( dirname “${BASH_SOURCE[0]}” )” >/dev/null 2>&1 && pwd )”
TASK_JSON_TEMPLATE=${DIR}/task.json

TASK_JSON=$(cat $TASK_JSON_TEMPLATE | \
  jq --arg IMAGE "$IMAGE" '.taskDefinition | (.containerDefinitions[] | select(.name == "breaks-website") | .image) |= $IMAGE')

TASK_REVISION_ARN=$(aws ecs register-task-definition \
  --cli-input-json "$TASK_JSON" | \
  jq -r '.taskDefinition.taskDefinitionArn')

aws ecs update-service \
  --cluster $ECS_CLUSTER \
  --service $ECS_SERVICE \
  --force-new-deployment \
  --task-definition $TASK_REVISION_ARN
