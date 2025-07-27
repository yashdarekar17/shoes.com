import { useState } from "react";

const AccordionSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-4 flex justify-between items-center text-gray-700 font-medium"
      >
        {title}
        <span className="text-xl">{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && <div className="py-2 text-gray-600 text-sm">{children}</div>}
    </div>
  );
};

const ProductDetailsAccordion = () => {
  return (
    <div className="max-w-[600px] mt-12 mx-auto">
      <AccordionSection title="Product Highlights">
        <ul className="list-disc ml-6">
          <li>Breathable mesh upper</li>
          <li>Cushioned insole for comfort</li>
          <li>Durable rubber outsole</li>
        </ul>
      </AccordionSection>

      <AccordionSection title="Available Sizes">
        <div className="flex gap-3 flex-wrap">
          {["6", "7", "8", "9", "10", "11"].map((size) => (
            <span
              key={size}
              className="border border-gray-400 px-3 py-1 rounded hover:bg-black hover:text-white cursor-pointer"
            >
              {size}
            </span>
          ))}
        </div>
      </AccordionSection>

      <AccordionSection title="Color Options">
        <div className="flex gap-3 mt-2">
          <div className="w-6 h-6 rounded-full bg-black border" title="Black"></div>
          <div className="w-6 h-6 rounded-full bg-red-600 border" title="Red"></div>
          <div className="w-6 h-6 rounded-full bg-blue-500 border" title="Blue"></div>
        </div>
      </AccordionSection>

     
    </div>
  );
};

export default ProductDetailsAccordion;
