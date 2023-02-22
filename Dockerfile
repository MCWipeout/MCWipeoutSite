# Version 1
# # credits to https://gist.github.com/AradAlvand/04b2cad14b00e5ffe8ec96a3afbb34fb
# FROM node:16-alpine AS builder
# WORKDIR /app
# COPY package*.json ./
# RUN npm ci
# COPY . .
# # set backend api to given variable, note: not sure about this if it works lol

# ENV VITE_BACKEND_API=https://reafyapi.herokuapp.com/api/v1
# ENV VITE_GOOGLE_ANALYTICS_ID=G-KQFQJ9FLR3
# RUN npm run build
# RUN npm prune --production

# FROM mhart/alpine-node:slim-16
# ENV NODE_ENV=production


# WORKDIR /app
# COPY --from=builder /app/build build/
# COPY --from=builder /app/node_modules node_modules/
# COPY package.json .
# EXPOSE 3000
# CMD [ "node", "build" ]

# stage build
FROM node:16-alpine

WORKDIR /app

# copy everything to the container
COPY . .

# clean install all dependencies
RUN npm ci

# remove potential security issues
RUN npm audit fix

# build SvelteKit app
RUN npm run build


# stage run
FROM node:16-alpine

WORKDIR /app

# copy dependency list
COPY --from=0 /app/package*.json ./

# clean install dependencies, no devDependencies, no prepare script
RUN npm ci --production --ignore-scripts

# remove potential security issues
RUN npm audit fix

# copy built SvelteKit app to /app
COPY --from=0 /app/build ./

EXPOSE 3000
CMD ["node", "./index.js"]