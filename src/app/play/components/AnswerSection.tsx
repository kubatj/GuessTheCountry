import { useState } from "react";

type Props = {
  onSubmit: (value: string) => void;
};

export default function AnswerSection({ onSubmit }: Props) {
  const [answer, setAnswer] = useState("");

  return (
    <section className="m-4 flex flex-row gap-2">
      <input
        id="answer"
        type="text"
        value={answer}
        placeholder="Guess here"
        onChange={(e) => setAnswer(e.target.value)}
        className="bg-yellow-50 text-md w-64 p-2 outline-1 border-slate-700 opacity-90 round-lg border rounded "
      />
      <button
        className="p-4 bg-lime-100 rounded-md outline-1 hover:bg-lime-400 text-black font-semibold flex disabled:opacity-50"
        onClick={() => onSubmit(answer)}
      >
        submit answer
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 ml-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
    </section>
  );
}
