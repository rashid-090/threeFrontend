FROM node:16.12.0 as stage1

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY . .

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source


RUN npm run build

#Stage 2
FROM nginx:alpine

EXPOSE 8081
#Copying Nginx config
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
#Copying  Build dir to nginx container
COPY --from=stage1 /usr/src/app/build/ /usr/share/nginx/html

