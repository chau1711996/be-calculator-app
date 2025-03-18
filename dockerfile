# Sử dụng Node.js làm base image
FROM node:20-alpine

# Tạo thư mục làm việc
WORKDIR /usr/src/app

# Copy package.json và package-lock.json
COPY package*.json ./

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true

# Cài đặt bash
RUN apk update && apk add bash

RUN apk update && apk add --no-cache \
  chromium \
  nss \
  freetype-dev \
  harfbuzz-dev \
  ttf-freefont

  # Tải wait-for-it
RUN wget -qO /usr/bin/wait-for-it.sh https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh && chmod +x /usr/bin/wait-for-it.sh

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