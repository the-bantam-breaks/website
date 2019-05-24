#!/bin/bash

IMAGE=bantambreakswebsite
FULL_IMAGE=bantambreaks/${IMAGE}
COMMIT_HASH=$(git rev-parse --short HEAD)
DATE=$(date '+%Y%m%d%H%M%S')
VERSION="${DATE}-${COMMIT_HASH}"

# Builds
function buildDockerImage() {
    echo
    echo "====> Building image ${FULL_IMAGE}:${VERSION}"
    docker build \
        --tag "${FULL_IMAGE}:latest" \
        --tag "${FULL_IMAGE}:${VERSION}" \
        .
    echo "==== Done building image"
}

# function publishDockerImage() {
#     echo
#     echo "====> Pushing image to registry"
#     docker push ${FULL_IMAGE}:${VERSION}
#     echo "==== Done publishing image"
# }

# Cleanup
function cleanupDockerImage() {
    echo
    echo "====> Removing image from local Docker daemon"
    docker rmi ${FULL_IMAGE}:latest || true
    docker rmi ${FULL_IMAGE}:${VERSION} || true
    echo "==== Done removing image"
}

# if [ "$1" == "--publish" ]
# then
#     buildDockerImage
#     publishDockerImage
#     cleanupDockerImage
# else
    buildDockerImage
# fi

echo
echo "====> Done"
