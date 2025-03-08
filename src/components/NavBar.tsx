import { HStack, Image } from "@chakra-ui/react";
import { ColorModeButton } from "./ui/color-mode";
import SearchInput from "./SearchInput";

function NavBar() {
  return (
    <HStack>
      <Image src="/images/logo.webp" boxSize="60px" ml={{ lg: "-8px" }} />
      <SearchInput />
      <ColorModeButton />
    </HStack>
  );
}

export default NavBar;
