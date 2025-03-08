import { Platform } from "../hooks/useGames";
import usePlatforms from "../hooks/usePlatforms";
import {
  SelectRoot,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValueText,
  SelectLabel,
} from "./ui/select";
import { createListCollection } from "@chakra-ui/react";

interface Props {
  onSelectPlatform(platform: Platform): void;
}

function PlatformSelector({ onSelectPlatform }: Props) {
  const { data, error } = usePlatforms();

  if (error) return null;

  const platforms = createListCollection({
    items: data,
    itemToString: (item) => item.name,
    itemToValue: (item) => item.name,
  });

  return (
    <SelectRoot collection={platforms} width="320px">
      <SelectLabel>Platforms</SelectLabel>
      <SelectTrigger>
        <SelectValueText placeholder="Choose Platform" />
      </SelectTrigger>
      <SelectContent>
        {platforms.items.map((platform) => (
          <SelectItem
            onClick={() => onSelectPlatform(platform)}
            item={platform}
            key={platform.id}
          >
            {platform.name}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectRoot>
  );
}

export default PlatformSelector;
