FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY src ./src

# Compile TypeScript code
RUN npm run build

FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist . 

ENV PORT=5173
EXPOSE 5173
CMD ["node", "server.js"]