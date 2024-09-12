import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import { colorScheme } from "./tailwind.config";
import Link, { LinkProps } from "next/link";

const {
  black,
  red,
  green,
  yellow,
  blue,
  purple,
  cyan,
  white,
  brightBlack,
  brightRed,
  brightGreen,
  brightYellow,
  brightBlue,
  brightPurple,
  brightCyan,
  brightWhite,
  background,
  foreground,
  selectionBackground,
  cursorColor,
} = colorScheme;

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 style={{ fontSize: "48px", color: white }}>{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 style={{ fontSize: "36px", color: white }}>{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 style={{ fontSize: "28px", color: white }}>{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 style={{ fontSize: "20px", color: white }}>{children}</h4>
    ),
    h5: ({ children }) => (
      <h5 style={{ fontSize: "16px", color: white }}>{children}</h5>
    ),
    h6: ({ children }) => (
      <h6 style={{ fontSize: "14px", color: white }}>{children}</h6>
    ),
    p: ({ children }) => (
      <p style={{ fontSize: "16px", color: foreground }}>{children}</p>
    ),
    a: (props) => (
      <Link
        target="_blank"
        style={{ color: blue, textDecoration: "underline" }}
        {...(props as LinkProps)}
      />
    ),
    img: (props) => (
      <Image
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        {...(props as ImageProps)}
      />
    ),
    ul: ({ children }) => (
      <ul
        style={{
          paddingLeft: "20px",
          color: foreground,
          listStyleType: "disc",
        }}
      >
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol style={{ paddingLeft: "20px", color: foreground }}>{children}</ol>
    ),
    li: ({ children }) => <li style={{ color: foreground }}>{children}</li>,
    blockquote: ({ children }) => (
      <blockquote
        style={{
          borderLeft: `4px solid ${blue}`,
          paddingLeft: "16px",
          color: brightBlack,
          fontStyle: "italic",
        }}
      >
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code
        style={{
          backgroundColor: brightBlack,
          color: brightGreen,
          padding: "2px 6px",
          borderRadius: "4px",
        }}
      >
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre
        style={{
          backgroundColor: black,
          color: white,
          padding: "12px",
          borderRadius: "4px",
          overflowX: "auto",
        }}
      >
        {children}
      </pre>
    ),
    table: ({ children }) => (
      <table
        style={{ width: "100%", borderCollapse: "collapse", color: foreground }}
      >
        {children}
      </table>
    ),
    th: ({ children }) => (
      <th
        style={{
          padding: "12px",
          backgroundColor: brightBlack,
          color: white,
          border: `1px solid ${brightBlack}`,
        }}
      >
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td
        style={{
          padding: "12px",
          border: `1px solid ${brightBlack}`,
          color: foreground,
        }}
      >
        {children}
      </td>
    ),
    hr: () => (
      <hr style={{ border: `1px solid ${brightBlack}`, margin: "20px 0" }} />
    ),
    strong: ({ children }) => (
      <strong style={{ color: white, fontWeight: 800 }}>{children}</strong>
    ),
    em: ({ children }) => (
      <em style={{ fontStyle: "italic", color: white }}>{children}</em>
    ),
    del: ({ children }) => <del style={{ color: red }}>{children}</del>,
    ...components,
  };
}
