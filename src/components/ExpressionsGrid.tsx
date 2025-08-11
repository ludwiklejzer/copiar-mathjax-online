import { type Expression } from "../lib/expressions";
import { ExpressionCard } from "./ExpressionCard";

export const ExpressionsGrid = ({
  expressions,
}: {
  expressions: Expression[];
}) => {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {expressions.map((expression: Expression) => (
        <ExpressionCard expression={expression} key={expression.name} />
      ))}
    </ul>
  );
};
