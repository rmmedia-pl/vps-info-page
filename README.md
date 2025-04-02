# Machine Info Page

A simple web application that displays basic machine identification information on a single page. This application is designed to be easily deployed to a VPS using Coolify or any Docker-compatible hosting service.

## Features

- Displays hostname
- Shows IP address
- Provides operating system information
- Shows server time
- Displays server uptime

## Deployment Options

### Option 1: Deploy with Docker

1. Clone this repository
2. Build the Docker image:
   ```
   docker build -t machine-info-page .
   ```
3. Run the container:
   ```
   docker run -p 3000:3000 machine-info-page
   ```
4. Access the application at http://localhost:3000

### Option 2: Deploy to Coolify

1. In your Coolify dashboard, create a new service
2. Select "Docker" as the deployment type
3. Provide your Git repository URL
4. Configure the build settings:
   - Build command: `npm install`
   - Start command: `node server.js`
   - Port: 3000
5. Deploy the service

### Option 3: Deploy from Source

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the server:
   ```
   npm start
   ```
4. Access the application at http://localhost:3000

## Customization

You can customize the displayed information by modifying the `/api/info` endpoint in `server.js` and updating the corresponding HTML in `index.html`.
