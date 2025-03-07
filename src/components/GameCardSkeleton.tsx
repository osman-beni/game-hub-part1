import { Skeleton, SkeletonText, Stack } from "@chakra-ui/react";

function GameCardSkeleton() {
  return (
    <Stack>
      <Skeleton height="250px" borderRadius="2xl" />
      <SkeletonText borderRadius="2xl" />
    </Stack>
  );
}

export default GameCardSkeleton;
