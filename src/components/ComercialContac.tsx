import React from "react";

import { emailQueue } from "@/services/Queue";

const ComercialContact: React.FC = () => {
  const emails = [""];

  emails.forEach((email) => {
    emailQueue.enqueue(email);
  });

  // const handleClick = () => {
  //   const currentEmail: string | undefined = emailQueue.dequeue() as string;
  //   const url = `mailto:${currentEmail}`;

  //   window.open(url, "_blank");
  //   emailQueue.enqueue(currentEmail);
  // };

  return <div className="" />;
};

export default ComercialContact;
