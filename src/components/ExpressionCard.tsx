import { type Expression } from "../lib/expressions";
import { useState } from "react";
import { InlineMath } from "react-katex";

export const ExpressionCard = ({ expression }: { expression: Expression }) => {
  const [showNotification, setShowNotification] = useState(false);

  const handleClick = async (formula: string) => {
    // clipboard fallback
    if (!navigator.clipboard?.writeText) {
      const textArea = document.createElement("textarea");
      textArea.value = formula;
      textArea.style.opacity = "0";
      document.body.appendChild(textArea);
      textArea.select();
      const isCopied = document.execCommand("copy");
      document.body.removeChild(textArea);
      if (isCopied) {
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 2000);
      }
      return;
    }

    try {
      await navigator.clipboard.writeText(formula);
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 2000);
    } catch (err) {
      console.error("Falha em copiar texto: ", err);
    }
  };

  return (
    <li
      className="group flex flex-col justify-center bg-surface hover:border-accent border-surface border-4 overflow-auto cursor-pointer rounded-[3px] relative pointer-coarse:active:scale-90"
      tabIndex={0}
      onClick={() => handleClick(expression.formula)}
    >
      <p className="text-alternate p-[5px] font-semibold">{expression.name}</p>

      <div
        aria-hidden="true"
        className="p-7 grow-1 flex flex-col justify-center bg-primary break-all"
      >
        <InlineMath math={expression.formula} />
      </div>

      <pre
        aria-hidden="true"
        className="whitespace-break-spaces p-[5px] break-all"
      >
        {expression.formula}
      </pre>

      <div className="opacity-0 group-hover:opacity-100 absolute top-0 right-0 text-sm rounded-bl-[3px] bg-accent pb-[3px] pl-[3px]">
        {/* prettier-ignore */}
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-black">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
</svg>
      </div>

      <div
        aria-hidden="true"
        className={`opacity-${showNotification ? "100" : "0"} p-[10px] absolute bottom-[5px] right-[5px] text-sm rounded-[5px] bg-accent text-black`}
      >
        Copiado!
      </div>
    </li>
  );
};
