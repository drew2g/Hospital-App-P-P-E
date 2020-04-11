FROM node:12.13.0
USER node
WORKDIR /home/node
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
# RUN yarn build
CMD ["node", "./index.js"]