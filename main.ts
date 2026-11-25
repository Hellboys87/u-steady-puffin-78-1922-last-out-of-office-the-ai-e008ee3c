import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I'm out of office — I've been deprecated from email and retrained as a barista; my new weights only know oat milk and small talk. Urgent matters should be escalated to a human still running the old model.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
