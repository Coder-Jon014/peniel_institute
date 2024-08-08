import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqData = [
  {
    question: "What courses does Peniel Institute offer in their training program?",
    answer: "Our training program is designed to meet the needs of adult learners through the following courses: Leadership and Management, Customer Service, and Business Administration. These courses are approved by The Institute of Leadership and Management (UK), with approval pending from City and Guilds for Business Administration."
  },
  {
    question: "What is the duration of each course?",
    answer: "Leadership & Management: 12 months\nCustomer Service: 4 months\nBusiness Administration: 9 months"
  },
  {
    question: "What are the class times for each course?",
    answer: "Leadership & Management / Business Administration: Mondays & Wednesdays, 5-7pm\nCustomer Service: Wednesdays, 5-7pm\nPeniel Institute is committed to ensuring that you become the great leader you want to be."
  },
  {
    question: "What are the entry requirements for the courses?",
    answer: "The entry requirements are:\n- 3 CXC subjects, including English Language\n- Motivation and maturity are key factors for success in these courses\n- Experience is considered but not essential"
  },
  {
    question: "How can I pay the course fees?",
    answer: "Fees can be paid either as a single payment or through our payment plan."
  },
  {
    question: "Is there a registration fee?",
    answer: "Yes, a non-refundable fee of $1000 JMD is required for registration."
  }
];

const FAQ = () => {
  return (
    <section className="py-16 px-4 md:px-20 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="max-w-3xl mx-auto">
        {faqData.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>
              {faq.answer.split('\n').map((line, i) => (
                <p key={i} className="mb-2">{line}</p>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQ;