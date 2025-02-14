[![Docker Image CI](https://github.com/chintanboghara/chintan-boghara/actions/workflows/docker-image.yml/badge.svg?branch=main)](https://github.com/chintanboghara/chintan-boghara/actions/workflows/docker-image.yml)
[![Dependabot Updates](https://github.com/chintanboghara/chintan-boghara/actions/workflows/dependabot/dependabot-updates/badge.svg?branch=main)](https://github.com/chintanboghara/chintan-boghara/actions/workflows/dependabot/dependabot-updates)


`pnpm` install it using the following command:

```bash
npm install -g pnpm
```

### Steps to Run the Project

1. **Install dependencies**:

   ```bash
   pnpm install
   ```

2. **Start the local server**:

   ```bash
   pnpm dev
   ```

3. **Edit resume data**:

   Open the `./src/data/resume.tsx` file and make the necessary changes.

### Using Docker

1. **Build the Docker image**:

   ```bash
   docker build -t chintanboghara:v1 .
   ```

2. **Run the Docker container**:

   ```bash
   docker run --name chintanboghara -p 3000:3000 chintanboghara:v1
   ```

This will build the Docker image and run the container, making the portfolio available at `http://localhost:3000`.
