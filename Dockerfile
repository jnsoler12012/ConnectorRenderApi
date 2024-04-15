FROM ghcr.io/puppeteer/puppeteer:22.6.4

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/user/bin/google-chrome-stable

WORKDIR /usr/src/app

COPY pacckage*.json ./
RUN npm ci
COPY . .
CMD ["node", "./src/index.js"]
