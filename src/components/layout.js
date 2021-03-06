/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Global } from "@emotion/core"
import { useTwitterEffect } from "./twitter-effect"

function Layout({ children }) {
  useTwitterEffect()
  return (
    <Styled.root
      sx={{
        display: "flex",
        // overflowX: "hidden",
        width: "100vw",
      }}
    >
      <Global
        styles={{
          body: { margin: 0, overflowX: "hidden" },
        }}
      />
      <aside
        sx={{
          bg: "darkBackground",
          color: "lightText",
          width: [0, "50%"],
          minHeight: "100vh",
        }}
      />
      <div sx={{ bg: "background", color: "text", width: ["100%", "50%"] }}>
        <main
          sx={{
            py: [5, "topMargin"],
            pl: [0, "innerMargin"],
            width: ["content", "content"],
            maxWidth: ["80%", "none"],
            mx: ["auto", 0],
          }}
        >
          {children}
        </main>
      </div>
    </Styled.root>
  )
}

export default Layout
