FROM node
WORKDIR /desafiodevops
COPY package*.json /desafiodevops/
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "node" , "index.js"]