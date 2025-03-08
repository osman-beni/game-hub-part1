import { Input } from "@chakra-ui/react";
import { InputGroup } from "./ui/input-group";
import { BsSearch } from "react-icons/bs";

function SearchInput() {
  return (
    <InputGroup flex={1} startElement={<BsSearch />}>
      <Input placeholder="Search games..." />
    </InputGroup>
  );
}

export default SearchInput;
