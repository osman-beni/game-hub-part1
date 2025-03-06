import { HStack, Image, Text } from "@chakra-ui/react";
import { ColorModeButton } from "./ui/color-mode";

function NavBar() {
  return (
    <HStack>
      <Image src="/images/page-img.webp" boxSize="60px" />
      <Text>NavBar</Text>
      <ColorModeButton />
    </HStack>
  );
}

export default NavBar;
