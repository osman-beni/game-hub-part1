import { HStack, Image } from "@chakra-ui/react";
import { ColorModeButton } from "./ui/color-mode";

function NavBar() {
  return (
    <HStack justifyContent="space-between">
      <Image src="/images/page-img.webp" boxSize="60px" ml="-8px" />
      <ColorModeButton />
    </HStack>
  );
}

export default NavBar;
