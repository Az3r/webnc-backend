FROM node:14

# copy package
WORKDIR /usr/local/app
COPY package*.json ./
COPY src ./src/
COPY www ./www/

# install dependencies
RUN npm ci --only=production
COPY . .

# run app
EXPOSE 5000
CMD ["npm", "start"]