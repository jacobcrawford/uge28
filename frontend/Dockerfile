# Stage 1: Build the Angular app
FROM node:18-alpine AS builder

WORKDIR /app

# Copy entire frontend directory (including package.json)
COPY frontend/ .

# Install dependencies
RUN npm install

# Build the Angular app
RUN npm run build

# Stage 2: Serve the app with Angular CLI
FROM node:18-alpine

WORKDIR /app

# Copy entire frontend directory from builder
COPY --from=builder /app /app

# Expose port 4200
EXPOSE 4200

# Start the Angular development server listening on all interfaces
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4200", "--poll", "2000"]
