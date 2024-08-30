import { emailQueue } from "@/services/Queue";

const ComercialContact = () => {
  const emails = ["ventas1", "ventas", "ventas3", "ventas4"];

  emails.forEach((email) => {
    emailQueue.enqueue(email);
  });

  // const handleClick = () => {
  //   const currentEmail: string | undefined = emailQueue.dequeue() as string;
  //   const url = `mailto:${currentEmail}`;

  //   window.open(url, "_blank");
  //   emailQueue.enqueue(currentEmail);
  // };
};

export default ComercialContact;
