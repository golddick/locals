import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

  interface QueTaskProps {
    data: { question: string; answer: string }[]
  }
  
  export function QueTask({ data }: QueTaskProps) {
    return (
        <Accordion type="single" collapsible className="w-full">
        {data.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`} className="border-black">
            <AccordionTrigger className="font-bold">{faq.question}</AccordionTrigger>
            <AccordionContent className="text-[#282828CC]">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    )
  }
  