# Subscribe to Solana Slots with gRPC (GS Node)

This example shows how to subscribe to slot changes in real-time using gRPC and the GS Node infrastructure.

> 📡 Endpoint used: `https://grpc.gsnode.io`

## 🛠️ Requirements

- Node.js v18+
- `@grpc/grpc-js`
- `protobufjs`
- TypeScript

## 💻 Example

Below is the actual code used in `index.ts` to subscribe to Solana slot changes using gRPC:

```ts
import { SubscribeRequest, CommitmentLevel } from "./types"; // Example types assumed

const req: SubscribeRequest = {
  accounts: {},
  slots: {
    incoming_slots: {},
  },
  transactions: {},
  transactionsStatus: {},
  entry: {},
  blocks: {},
  blocksMeta: {},
  accountsDataSlice: [],
  commitment: CommitmentLevel.PROCESSED,
};

console.log("SubscribeRequest ready to send to gRPC stream.");
```

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
