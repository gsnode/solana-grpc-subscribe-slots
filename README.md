# Subscribe to Solana Slots with gRPC (GS Node)

This example shows how to subscribe to slot changes in real-time using gRPC and the GS Node infrastructure.

> 📡 Endpoint used: `https://grpc.gsnode.io`

## 🛠️ Requirements

- Node.js v18+
- `@grpc/grpc-js`
- `protobufjs`
- TypeScript

## 💻 Example

The script `index.ts` opens a gRPC stream to Solana Mainnet and logs new incoming slots using GS Node.

## 📦 Install dependencies

```bash
npm install
```

## 🚀 Run the example

```bash
ts-node index.ts
```

## 🔗 About GS Node

GS Node is a high-speed, low-latency RPC provider for Solana, trusted by traders, bots and DApps.
Learn more at [gsnode.io](https://gsnode.io)
