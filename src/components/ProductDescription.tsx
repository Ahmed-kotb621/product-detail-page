import { useState } from "react";
import DOMPurify from "dompurify";

type ProductDescriptionProps = {
  description: string;
};

function ProductDescription({ description }: ProductDescriptionProps) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => setExpanded(!expanded);

  const sanitized = (html: string) => DOMPurify.sanitize(html);

  const shortDescription = sanitized(description.slice(0, 150));
  const fullDescription = sanitized(description);

  return (
    <div className="text-grayPrice font-normal leading-[130%]">
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{
          __html: expanded ? fullDescription : shortDescription,
        }}
      />
      <button
        onClick={toggleExpanded}
        className="text-black font-medium text-base hover:underline inline-block"
      >
        {expanded ? (
          <span className="text-black font-medium text-base">See Less</span>
        ) : (
          <span className="text-black font-medium text-base">See More...</span>
        )}
      </button>
    </div>
  );
}

export default ProductDescription;
