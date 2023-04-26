import React from "react";

import NextLink, { LinkProps as NextLinkProps } from "next/link";

import { styled } from "stitches";

const Anchor = styled("a", {});

type LinkProps = React.ComponentProps<typeof Anchor>;

export default ({ href = "/", target, children, ...props }: LinkProps) => (
  <NextLink href={href} target={target} legacyBehavior>
    <Anchor {...props}>{children}</Anchor>
  </NextLink>
);
