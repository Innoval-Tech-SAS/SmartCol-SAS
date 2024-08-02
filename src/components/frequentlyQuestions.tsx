import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

import { smartcolFAQ } from "../config/site";

const FrequentlyQuestions: React.FC = () => {
  const renderFAQItems = (
    questions: [string, string | { [key: string]: string | string[] }][]
  ) => {
    return questions.map(([question, answer], index) => (
      <AccordionItem
        key={index + 1}
        aria-label={`Accordion ${index + 1}`}
        subtitle="Click para ver"
        title={question}>
        <div className="font-semibold">
          {typeof answer === "string" ? (
            <p className="py-1 text-indent">{answer}</p>
          ) : (
            Object.entries(answer).map(([category, items], idx) => (
              <p key={idx} className="py-1 text-indent">
                <strong>{`-${category}: `}</strong>
                {Array.isArray(items) ? items.join(", ") : items}
              </p>
            ))
          )}
        </div>
      </AccordionItem>
    ));
  };

  const faqEntries = Object.entries(smartcolFAQ) as [
    string,
    string | { [key: string]: string | string[] },
  ][];
  const firstAccordionItems = faqEntries.slice(0, 3);
  const secondAccordionItems = faqEntries.slice(3);

  return (
    <>
      <div className="pt-5">
        <h2 className="text-3xl font-bold text-primary text-center">
          Preguntas Frecuentes
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center bg-black/20 border-white/10 rounded-3xl border my-12 mx-10 p-10 gap-10 dark:bg-white/10 shadow-xl">
        <Accordion className="w-full lg:w-1/2" variant="light">
          {renderFAQItems(firstAccordionItems)}
        </Accordion>

        <Accordion className="w-full lg:w-1/2" variant="light">
          {renderFAQItems(secondAccordionItems)}
        </Accordion>
      </div>
    </>
  );
};

export default FrequentlyQuestions;
