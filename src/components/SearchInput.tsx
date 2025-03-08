import { Input } from "@chakra-ui/react";
import { InputGroup } from "./ui/input-group";
import { BsSearch } from "react-icons/bs";
import { useRef } from "react";

interface Props {
  onSearch(searchText: string): void;
}

function SearchInput({ onSearch }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (inputRef.current) onSearch(inputRef.current.value);
      }}
      style={{ width: "100%" }}
    >
      <InputGroup width="100%" startElement={<BsSearch />}>
        <Input width="100%" ref={inputRef} placeholder="Search games..." />
      </InputGroup>
    </form>
  );
}

export default SearchInput;
