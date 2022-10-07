// The Card to be exported goes here
import Image from "next/image";
import Link from "next/link";

import {
  StyledCardContainer,
  StyledCardHeading,
  StyledCardParagraph,
  StyledIconContainer,
  StyledTextLayout,
} from "./elements";

//icon: { src: "/img/brief-icon.png", alt: "", width: 45, height: 45 }
export const Card = ({ header, paragraph, icon, ...props }) => {
  const linkTo = () => {
    return `/#${props.linkID}`;
  };

  return (
    <Link href={linkTo()}>
      <StyledCardContainer {...props}>
        <StyledIconContainer>
          <Image
            id={props.id}
            alt={icon.alt}
            src={icon.src}
            layout="fixed"
            width={icon.width}
            height={icon.height}
          />
        </StyledIconContainer>
        <StyledTextLayout>
          <StyledCardHeading className="heading">{header}</StyledCardHeading>
          <StyledCardParagraph>{paragraph}</StyledCardParagraph>
        </StyledTextLayout>
      </StyledCardContainer>
    </Link>
  );
};
