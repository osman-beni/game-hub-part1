import { Skeleton, SkeletonText, Stack } from "@chakra-ui/react";

function GameCardSkeleton() {
  return (
    <Stack>
      <Skeleton height="250px" />
      <SkeletonText />
    </Stack>
  );
}

export default GameCardSkeleton;
