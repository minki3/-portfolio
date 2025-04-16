# 1. Build Stage
FROM node:20 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# 2. Production Stage
FROM node:20-slim

WORKDIR /app
COPY --from=builder /app ./

ENV NODE_ENV=production
ENV PORT=80

EXPOSE 80

# 🔥 $PORT 환경변수 적용되도록 쉘 실행 방식으로 변경
CMD ["npm", "start", "-H", "0.0.0.0", "-p", "80"]
