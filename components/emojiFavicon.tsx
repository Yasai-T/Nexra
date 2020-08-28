import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  isRotate?: boolean;
}
const EmojiFavicon: FC<Props> = ({ children, isRotate = false }) => (
  <link
    rel="icon"
    href={`data:image/svg+xml,
    <svg
      xmlns=%22http://www.w3.org/2000/svg%22
      viewBox=%220 0 100 100%22
    >
      <text y=%22.9em%22 font-size=%2290%22>
      ${children}
      ${
        isRotate
          ? `<animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="0 50 50"
              to="360 50 50"
              dur="2s"
              repeatCount="indefinite"
            />`
          : ""
      }
      </text>
    </svg>`}
  />
);

export default EmojiFavicon;
