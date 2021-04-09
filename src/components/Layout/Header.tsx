import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";

interface ISiteTitleQuery {
  site: {
    siteMetadata: {
      title: string;
    };
  };
}

export const Header = () => {
  const { site }: ISiteTitleQuery = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header>
      <div>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`
            }}
          >
            {site.siteMetadata.title}
          </Link>
        </h1>
        <button
          type="button"
          onClick={() => {
            console.log("TOGGLE_THEME");
          }}
        >
          Toggle Theme
        </button>
      </div>
    </header>
  );
};
