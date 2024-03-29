FROM node:16.10.0 AS builder
COPY ./build ./build
#RUN npm install -g npm@7.24.0
#RUN npm install
#RUN npx browserslist@latest --update-db
#RUN npm run swizzle docusaurus-lunr-search SearchBar
#RUN npm run build
CMD ["sh", "-c", "npx http-server ./build -p 5000"]

#FROM nginx:latest
#COPY nginx.conf /etc/nginx/nginx.conf
#EXPOSE 5000/tcp
##COPY --from=builder /docs/build /usr/share/nginx/html
#COPY ./build /usr/share/nginx/html