import "./App.css";
import { SearchBar } from "./components/SearchBar";
import { FilterPanel } from "./components/FilterPanel";
import { ExpressionsGrid } from "./components/ExpressionsGrid";
import { expressions } from "./lib/expressions";
import { useEffect, useRef, useMemo, useState } from "react";
import { ThemeToggle } from "./components/ThemeToggle";

function App() {
  const [query, setQuery] = useState("");
  const allCategories = useRef<string[] | null>(null);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const filteredExpressions = useMemo(() => {
    return expressions.filter((expression) => {
      const matchesQuery = query
        ? expression.name.toLowerCase().includes(query.toLowerCase())
        : true;

      const matchesCategory =
        selectedCategories.length > 0
          ? selectedCategories.some((c) => expression.categories.includes(c))
          : true;

      return matchesQuery && matchesCategory;
    });
  }, [query, selectedCategories]);

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === "theme") {
        document.documentElement.dataset.theme =
          event.oldValue === "light" ? "dark" : "light";
      }
    };

    window.addEventListener("storage", handleStorageChange);
  }, []);

  if (allCategories.current === null) {
    allCategories.current = [
      ...new Set(expressions.flatMap((expr) => expr.categories)),
    ];
  }

  return (
    <div className="text-lg text-center max-w-[1040px] m-auto px-[20px] py-[30px]">
      <h1 className="text-[2.5em] text-alternate">Copiar MathJax Online</h1>
      <p className="text-[1.2em] py-[7px]">
        Clique em uma expressão para copiar para o seu clipboard
      </p>

      <p className="pt-[5px] pb-[15px]">
        Faça sugestões em <a href="https://x.com/ludwiklejzer">@ludwiklejzer</a>{" "}
        ou por PR{" "}
        <a href="https://github.com/ludwiklejzer/copiar-mathjax-online">
          no Github
        </a>
        .
      </p>

      <SearchBar query={query} onChange={setQuery} />

      <FilterPanel
        categories={allCategories.current}
        selectedCategories={selectedCategories}
        onChange={setSelectedCategories}
      />

      {filteredExpressions.length === 0 ? (
        <p className="font-semibold">Nada encontrado para "{query}"!</p>
      ) : (
        <ExpressionsGrid expressions={filteredExpressions} />
      )}

      <ThemeToggle />
    </div>
  );
}

export default App;
