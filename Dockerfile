FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install -g pnpm

RUN pnpm install
COPY . .
RUN npm run build
# ---------- Stage 2 : Production ----------
FROM nginx:alpine
#COPY --from=build /app/dist /usr/share/nginx/html
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
