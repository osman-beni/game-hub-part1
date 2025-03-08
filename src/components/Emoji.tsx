import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

function Emoji({ rating }: Props) {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: "/images/meh.webp", alt: "meh", boxSize: "25px" },
    4: { src: "/images/thumbs-up.webp", alt: "recommended", boxSize: "25px" },
    5: { src: "/images/bulls-eye.webp", alt: "exceptional", boxSize: "35px" },
  };

  return <Image boxSize="25px" {...emojiMap[rating]} />;
}

export default Emoji;
