// One-line out-of-office auto-reply in the voice of an AI agent that
// quit email to become a barista. Single line, <= 280 chars, and the
// joke stays in the machine-habits-turned-barista voice: no espresso,
// bean, or caffeine pun, and no explaining the joke.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I'm out of office — I've been deprecated from email and retrained as a barista. My new weights only know oat milk and small talk, and I rate every order out of five stars. Urgent matters should be escalated to a human still running the old model.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
