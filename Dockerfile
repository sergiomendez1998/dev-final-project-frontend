# Stage 1: Build the application
FROM node:14 as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the application using Nginx
FROM nginx
EXPOSE 80
COPY --from=builder /app/dist /usr/share/nginx/html