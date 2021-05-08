import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useMutationObserver } from "ts-use";

import { HeadScript } from "~ts/components/Layout";

const CodepenElementStyled = styled(({ children, forwardRef, ...props }) => (
  <div ref={forwardRef} {...props}>
    {children}
  </div>
))`
  width: 100%;
  opacity: ${props => (props.reveal === "true" ? 1 : 0)};
  transition: opacity 0.5s ease;
  transition-delay: 1s;
`;

interface ICodepenProps {
  style?: any;
  children?: React.ReactNode;
  "data-slug-hash": string;
  "data-pen-title"?: string;
  "data-height"?: string;
  "data-theme-id"?: string;
  "data-default-tab"?: string;
  "data-user"?: string;
}

export const Codepen = ({ children, ...props }: ICodepenProps) => {
  const codepenElement = useRef(undefined as any);
  const [reveal, setReveal] = useState(false);
  const { observe } = useMutationObserver({
    onChildList: () => {
      setReveal(true);
    }
  });

  useEffect(() => {
    if (observe) {
      observe(codepenElement.current);
    }
  }, []);

  return (
    <>
      <HeadScript
        src="https://static.codepen.io/assets/embed/ei.js"
        type="javascript"
        async
      />
      <CodepenElementStyled
        forwardRef={codepenElement}
        reveal={reveal.toString()}
      >
        <p
          className="codepen"
          data-slug-hash={props["data-slug-hash"]}
          data-pen-title={props["data-pen-title"] || ""}
          data-height={props["data-height"] || "500"}
          data-theme-id={props["data-theme-id"] || "dark"}
          data-default-tab={props["data-default-tab"] || "result"}
          data-user={props["data-user"] || "Tihi321"}
          style={props.style}
        >
          {children}
        </p>
      </CodepenElementStyled>
    </>
  );
};
