import { useRef, useState } from "react";
import ReviewForm from "./ReviewForm";

export default function NewReview({
  serieId,
}: {
  serieId: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  function openForm() {
    setIsOpen(!isOpen);
    console.log(isOpen);
  }

  return(
    <div>
      <button
        onClick={openForm}
        className="bg-blue-500 text-white rounded-lg p-2 mb-4 hover:bg-blue-600"
      >
        Escribir reseña
      </button>
      {isOpen && <ReviewForm serieId={serieId} formRef={formRef} />}
    </div>
  )
}
