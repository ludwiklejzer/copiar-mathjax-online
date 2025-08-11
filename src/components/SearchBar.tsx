interface SearchProps {
  query: string;
  onChange: (v: string) => void;
}

export const SearchBar = ({ query, onChange }: SearchProps) => {
  return (
    <div className="border-surface border-5 my-4 sticky top-[10px] backdrop-filter-[blur(30px)] z-50 focus:border-alternate text-xl font-bold rounded-[5px]">
      {/* prettier-ignore */}
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 absolute top-3.5 left-3.5 -z-1 text-fg">
				<path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
			</svg>

      <input
        type="text"
        name="search"
        className="pl-[50px] py-[12px] pr-[10px] w-full"
        value={query}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Busque por uma expressão..."
      />
    </div>
  );
};
