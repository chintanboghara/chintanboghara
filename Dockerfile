# Use an official Node.js runtime as a parent image (with Node.js version 18 or the latest LTS)
FROM node:23-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and pnpm-lock.yaml to install dependencies
COPY package.json pnpm-lock.yaml ./

# Install pnpm globally
RUN npm install -g pnpm

# Install project dependencies using pnpm
RUN pnpm install --frozen-lockfile

# Copy the rest of the application code (after dependencies installation for better caching)
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Optional: Health check to ensure the app is up
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000 || exit 1

# Command to run your application
CMD ["pnpm", "dev"]
