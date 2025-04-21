// components/CustomMarkdown.jsx
import React from "react";
import ReactMarkdown from "react-markdown";

const commonComponents = {
  p: ({ node, ...props }) => <span {...props} />,
  a: ({ node, ...props }) => (
    <a className="text-blue‑500 hover:text-blue‑700 underline" {...props} />
  ),
};

export function CustomMarkdown({ children, ...other }) {
  return (
    <ReactMarkdown components={commonComponents} {...other}>
      {children}
    </ReactMarkdown>
  );
}
