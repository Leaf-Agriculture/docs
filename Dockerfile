FROM node:16.10.0 AS builder
COPY . /docs
WORKDIR /docs
RUN npm install -g npm@7.24.0
RUN npm install
RUN npx browserslist@latest --update-db
RUN npm run swizzle docusaurus-lunr-search SearchBar
RUN npm run build

FROM nginx:latest
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /docs/build /usr/share/nginx/html