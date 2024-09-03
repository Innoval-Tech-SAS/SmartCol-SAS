import { Queue } from "./Queue";

const whatsAppQueue = new Queue<string>();

const whatsappNumbers = [
  "3504227733",
  "3160179783",
  "3164568409",
  "3504227737",
];

whatsappNumbers.forEach((number) => {
  whatsAppQueue.enqueue(number);
});

export { whatsAppQueue };
