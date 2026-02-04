"use client";

import { useEffect, useRef } from "react";
import lottie from "lottie-web";

type Props = {
  path?: string;     // lottie json path in /public
  size?: number;     // px
  className?: string;
};

export default function LottieAvatar({
  path = "/emoji.json",
  size = 32,
  className,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const anim = lottie.loadAnimation({
      container: ref.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path,
    });

    return () => anim.destroy();
  }, [path]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ width: size, height: size }}
    />
  );
}
