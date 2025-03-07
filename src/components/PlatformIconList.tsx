import { Icon, HStack } from "@chakra-ui/react";

import {
  FaPlaystation,
  FaWindows,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
  FaGamepad,
} from "react-icons/fa6";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";

import { Platform } from "../hooks/useGames";

interface Props {
  platforms: Platform[];
}

function PlatformIconList({ platforms }: Props) {
  return (
    <HStack>
      {platforms.map(({ id, slug }) => (
        <Icon color="gray.500" key={id}>
          {selectIcon(slug)}
        </Icon>
      ))}
    </HStack>
  );
}

function selectIcon(slug: string) {
  switch (slug) {
    case "pc":
      return <FaWindows />;
    case "android":
      return <FaAndroid />;
    case "mac":
      return <FaApple />;
    case "playstation":
      return <FaPlaystation />;
    case "xbox":
      return <FaXbox />;
    case "linux":
      return <FaLinux />;
    case "ios":
      return <MdPhoneIphone />;
    case "nintendo":
      return <SiNintendo />;
    case "web":
      return <BsGlobe />;

    default:
      return <FaGamepad />;
  }
}

export default PlatformIconList;
