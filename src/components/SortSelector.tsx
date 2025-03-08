import { createListCollection } from "@chakra-ui/react";
import {
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
  SelectLabel,
} from "./ui/select";

function SortSelector() {
  const orders = createListCollection({ items: orderBys });

  return (
    <SelectRoot collection={orders} width="320px">
      <SelectLabel>Order by</SelectLabel>
      <SelectTrigger>
        <SelectValueText placeholder="Choose Order" />
      </SelectTrigger>
      <SelectContent>
        {orders.items.map((order) => (
          <SelectItem item={order} key={order.value}>
            {order.label}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectRoot>
  );
}

const orderBys = [
  { label: "Relevance", value: "relevance" },
  { label: "Date added", value: "date added" },
  { label: "Name", value: "name" },
  { label: "Release Date", value: "release date" },
  { label: "Popularity", value: "popularity" },
  { label: "Average Rating", value: "average rating" },
];

export default SortSelector;
