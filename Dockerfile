FROM node:24-bookworm-slim@sha256:a5f4366e834695d5f363b920c104953a535d3a9864d1bdf74566a0ebe01daee5 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --include=dev
COPY src ./src
COPY public ./public
COPY index.html vite.config.ts tailwind.config.ts postcss.config.js tsconfig*.json ./
ARG VITE_IHELP_APP_URL=http://localhost:5180
ENV VITE_IHELP_APP_URL=$VITE_IHELP_APP_URL
RUN npm run build

FROM nginxinc/nginx-unprivileged@sha256:782bb89768cc87b7f95c18b95baa1af250e5d451f26794f59363540161147c01
COPY docker/web.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8080
