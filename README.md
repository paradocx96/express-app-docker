# Docker Login in CLI
```
docker login
```

# Pull Image from DockerHub and run it
```
docker run -p 8080:80 --name my-nginx nginx
```

# List the running containers
```
docker container ls
```

# List the local Docker image
```
docker image ls
```

# SSH into the container
```
docker exec -it {{app-name}} /bin/sh

docker exec -it my-nginx /bin/sh

docker run -it {{app-name}} /bin/sh

docker run -it my-express-app /bin/sh
```
# Open Bash commandline and make changes
```
# bash
# cd /usr/share/nginx/html
# ls -ll
# echo "<h1> #GOTAGOHOME </h1>" >> index.html
# cat index.html
```

# Build the container
```
docker build -t {{app-name}} .

docker build -t my-express-app .
```

# Run the container
```
docker run -p {{any-port}}:{{app-expose-port}} {{app-name}}

docker run -p 9090:8080 my-express-app
```

# Delete the container
```
docker container rm -f {{app-name}}

docker container rm -f my-express-app

docker container rm -f {{CONTAINER-ID}}

docker container rm -f 04db515f7645

docker container rm -f 04db515f7645 33942a9ce02d
```

# Build the container for push to DockerHub
```
docker build -t {{your-docker-username}}/my-express-app:v1 .

docker build -t paradocx96/my-express-app:v1 .
```

# Push the container to DockerHub
```
docker push {{your-docker-username}}/my-express-app:v1

docker push paradocx96/my-express-app:v1
```

# Run the application on another PC/Laptop
```
Docker run -p 9090:{{port-of-image}} {{original-user-username}}/my-express-app:v1

Docker run -p 9090:5000 paradocx96/my-express-app:v1
```
