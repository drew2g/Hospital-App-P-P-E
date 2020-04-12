FROM node:13.2.0
USER node
WORKDIR /home/node
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
# RUN yarn build
CMD ["node", "-r", "esm", "./src/index.js"]
