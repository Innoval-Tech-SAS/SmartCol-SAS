import { Queue } from "./Queue";

const emailQueue = new Queue<string>();

const emails = ["ventas", "ventas1", "ventas3", "ventas4"];

emails.forEach((email) => {
  email = `${email}@smartcol.com.co`;
  emailQueue.enqueue(email);
});

export { emailQueue };
