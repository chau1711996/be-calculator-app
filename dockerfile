# Sử dụng Node.js làm base image
FROM node:20

# Tạo thư mục làm việc
WORKDIR /app

# Copy package.json và package-lock.json
COPY package*.json ./

# Cài đặt các dependencies
RUN npm install

# Copy toàn bộ mã nguồn
COPY . .

# Build ứng dụng
RUN npm run build

# Mở cổng 3001
EXPOSE 3000

# Chạy ứng dụng
CMD ["npm", "run", "start:prod"]