ARG NODE_VERSION=24.14.0-alpine

# =========================================
# Development
# =========================================
FROM node:${NODE_VERSION} AS dev

WORKDIR /app

COPY getfit-ui/package*.json ./

RUN npm ci

COPY getfit-ui/ .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]


# =========================================
# Production Build
# =========================================
FROM node:${NODE_VERSION} AS build

WORKDIR /app

COPY getfit-ui/package*.json ./

RUN npm ci

COPY getfit-ui/ .

RUN npm run build


# =========================================
# Production
# =========================================
FROM node:${NODE_VERSION} AS production

WORKDIR /app

RUN npm install -g serve

COPY --from=build /app/dist ./dist

EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]