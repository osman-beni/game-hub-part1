import { HStack, Image } from "@chakra-ui/react";
import { ColorModeButton } from "./ui/color-mode";

function NavBar() {
  return (
    <HStack justifyContent="space-between">
      <Image src="/images/logo.webp" boxSize="60px" ml={{ lg: "-8px" }} />
      <ColorModeButton />
    </HStack>
  );
}

export default NavBar;
