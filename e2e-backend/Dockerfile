FROM node:16.17.1
WORKDIR /app
COPY package.json package.json
RUN npm install
RUN npm install pm2 -g
COPY . .
EXPOSE 8081
ENV ATLAS_URI="mongodb+srv://hosamabdulmaged:7837xGoJm8bD2AIK@cluster0.mfzrlos.mongodb.net/?retryWrites=true&w=majority"
ENV PORT=8081
CMD ["node", "index.js"]
