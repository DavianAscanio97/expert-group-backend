# Use Node.js LTS version as the base image
FROM node:lts-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install NestJS dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port that NestJS will run on
EXPOSE 3000

# Command to run the NestJS application
CMD ["npm", "run", "start:dev"]
