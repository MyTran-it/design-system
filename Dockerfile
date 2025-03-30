FROM node:16
WORKDIR /build
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build-storybook
FROM nginx:stable
EXPOSE 80
COPY --from=0 /build/storybook-static /usr/share/nginx/html
COPY k8s/nginx.conf /etc/nginx/conf.d/default.conf
COPY k8s/htpasswd /etc/nginx/htpasswd
STOPSIGNAL SIGQUIT
CMD ["nginx", "-g", "daemon off;"]