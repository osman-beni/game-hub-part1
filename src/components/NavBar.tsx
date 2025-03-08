import { HStack, Image } from "@chakra-ui/react";
import { ColorModeButton } from "./ui/color-mode";
import SearchInput from "./SearchInput";

interface Props {
  onSearch(searchText: string): void;
}

function NavBar({ onSearch }: Props) {
  return (
    <HStack>
      <Image src="/images/logo.webp" boxSize="60px" ml={{ lg: "-8px" }} />
      <SearchInput onSearch={onSearch} />
      <ColorModeButton />
    </HStack>
  );
}

export default NavBar;
