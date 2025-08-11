interface Props {
  categories: string[];
  selectedCategories: string[];
  onChange: (v: string[]) => void;
}

export const FilterPanel = ({
  categories,
  selectedCategories,
  onChange,
}: Props) => {
  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    if (ev.target.checked) {
      onChange([
        ...selectedCategories,
        ...categories.filter((cat) => "checkbox-" + cat === ev.target.name),
      ]);
    } else {
      onChange([
        ...selectedCategories.filter(
          (cat) => "checkbox-" + cat !== ev.target.name,
        ),
      ]);
    }
  };

  return (
    <ul className="flex flex-wrap gap-3 mb-2 pb-[20px] justify-center">
      {categories.map((category, index) => (
        <li key={index}>
          <input
            type="checkbox"
            name={`checkbox-${category}`}
            id={`checkbox-${category}`}
            className="peer sr-only"
            onChange={handleChange}
          />
          <label
            htmlFor={`checkbox-${category}`}
            className={`peer-checked:bg-surface-alternate peer-checked:text-primary bg-surface text-alternate block py-[5px] px-[10px] rounded-[3px] cursor-pointer peer-focus-visible:outline-3`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </label>
        </li>
      ))}
    </ul>
  );
};
