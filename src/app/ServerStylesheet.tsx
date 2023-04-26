"use client";

import { useServerInsertedHTML } from "next/navigation";

import { getCssText } from "stitches";

import GlobalStyles from "@styles/global";

export default ({ children }: { children: JSX.Element }) => {
  GlobalStyles();

  useServerInsertedHTML(() => {
    return (
      <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
    );
  });

  return children;
};
