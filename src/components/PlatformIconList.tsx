import { Icon, HStack } from "@chakra-ui/react";

import {
  FaPlaystation,
  FaWindows,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa6";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";

import { Platform } from "../hooks/useGames";

interface Props {
  platforms: Platform[];
}

function PlatformIconList({ platforms }: Props) {
  let IconMap: { [key: string]: Function } = {
    pc: () => <FaWindows />,
    android: () => <FaAndroid />,
    mac: () => <FaApple />,
    playstation: () => <FaPlaystation />,
    xbox: () => <FaXbox />,
    linux: () => <FaLinux />,
    ios: () => <MdPhoneIphone />,
    nintendo: () => <SiNintendo />,
    web: () => <BsGlobe />,
  };

  return (
    <HStack>
      {platforms.map(({ id, slug }) => (
        <Icon color="gray.500" key={id}>
          {IconMap[slug]()}
        </Icon>
      ))}
    </HStack>
  );
}

export default PlatformIconList;
