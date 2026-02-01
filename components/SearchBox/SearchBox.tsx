import { useState } from "react";
import css from "./SearchBox.module.css";

interface SearchBoxProps {
  readonly onSearch: (query: string) => void;
}

export default function SearchBox({ onSearch }: SearchBoxProps) {
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value.trim());
  };

  return (
    <input
      type="text"
      placeholder="Search notes..."
      value={query}
      onChange={handleChange}
      className={css.input}
    />
  );
}
