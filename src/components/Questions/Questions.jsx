import "@coreui/coreui/dist/css/coreui.min.css";
import {
  CAccordion,
  CAccordionItem,
  CAccordionBody,
  CAccordionHeader,
} from "@coreui/react";
import { QuestionsContainer } from "../common/Question/Question";
import { TitleContainer } from "../common/Contact/Contact";

const accordionData = [
  {
    question: "¿Qué tipos de materias primas ofrece SmartCol SAS?",
    answer: "Respuesta a la pregunta 1...",
  },
  {
    question: "¿En qué sectores industriales se especializa SmartCol SAS?",
    answer: "Respuesta a la pregunta 2...",
  },
  {
    question:
      "¿Cómo puedo mejorar la calidad y textura de mis productos utilizando los productos de Smartcol S.A.S?",
    answer: "Respuesta a la pregunta 3...",
  },
  {
    question:
      "¿Cómo puedo contactar a Smartcol S.A.S para obtener asesoría en la selección de productos?",
    answer: "Respuesta a la pregunta 4...",
  },
  {
    question: "¿Dónde realiza entregas Smartcol S.A.S?",
    answer: "Respuesta a la pregunta 5...",
  },
  {
    question:
      "¿Cómo puedo mejorar el sabor o apariencia de mis productos utilizando los servicios de Smartcol S.A.S?",
    answer: "Respuesta a la pregunta 6...",
  },
  {
    question:
      "¿Por qué debería elegir a Smartcol S.A.S como proveedor de materias primas?",
    answer: "Respuesta a la pregunta 7...",
  },
];

const accordionStyles = {
  //   "--cui-accordion-btn-color": "#456e2a",
  "--cui-accordion-active-bg": "#b0d48f",
  "--cui-accordion-active-color": "#ffffff",
  "--cui-accordion-btn-bg": "#ffffff",
  "--cui-accordion-btn-focus-box-shadow": "0 0 0 0.3rem rgba(69, 110, 42, 0.5)",
};

const Questions = () => {
  return (
    <QuestionsContainer>
      <TitleContainer>
        <h4>Preguntas Frecuentes</h4>
      </TitleContainer>
      <CAccordion style={accordionStyles}>
        {accordionData.map((item, index) => (
          <CAccordionItem key={index}>
            <CAccordionHeader className="accordion-header">
              {item.question}
            </CAccordionHeader>
            <CAccordionBody>{item.answer}</CAccordionBody>
          </CAccordionItem>
        ))}
      </CAccordion>
    </QuestionsContainer>
  );
};

export default Questions;
