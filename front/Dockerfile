FROM node
WORKDIR /desafiodevops
COPY package*.json /desafiodevops/
RUN npm install
COPY . .
EXPOSE 8080
CMD [ "npx", "http-server"]