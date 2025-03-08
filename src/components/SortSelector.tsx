import { createListCollection } from "@chakra-ui/react";
import {
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
  SelectLabel,
} from "./ui/select";

interface Props {
  onSelectSortOrder(sortOrder: string): void;
}

function SortSelector({ onSelectSortOrder }: Props) {
  const orders = createListCollection({ items: orderBys });

  return (
    <SelectRoot collection={orders} width="320px">
      <SelectLabel>Order by</SelectLabel>
      <SelectTrigger>
        <SelectValueText placeholder="Default: Relevance" />
      </SelectTrigger>
      <SelectContent>
        {orders.items.map((order) => (
          <SelectItem
            onClick={() => onSelectSortOrder(order.value)}
            item={order}
            key={order.value}
          >
            {order.label}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectRoot>
  );
}

const orderBys = [
  { label: "Relevance", value: "" },
  { label: "Date added", value: "-added" },
  { label: "Name", value: "name" },
  { label: "Release Date", value: "-released" },
  { label: "Popularity", value: "-metacritic" },
  { label: "Average Rating", value: "-rating" },
];

export default SortSelector;
