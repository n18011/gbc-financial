# ビルド用
FROM oven/bun:1 AS builder

WORKDIR /app

## パッケージをインストール
COPY package.json ./
COPY package-lock.json ./
COPY tsconfig.json ./
RUN bun install

COPY . .

RUN bun run build

# 実行用
FROM node:20.10-alpine

WORKDIR /app

## ビルド用のレイヤからコピーする
COPY --from=builder /app/build ./build
COPY --from=builder /app/package.json .
COPY --from=builder /app/package-lock.json .
COPY --from=builder /app/node_modules ./node_modules

## Svelteが動く3000ポートを開けておく
EXPOSE 3000

CMD ["node", "build"]
