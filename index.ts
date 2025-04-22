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
