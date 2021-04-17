import { TTagLink } from "~ts/typings";

import { connectTagLinks } from "./tags";

test("It should return tag links by connecting tags to all tags with path ", () => {
  const allTags: TTagLink[] = [
    { name: "wordpress", path: "/category/wordpress" },
    { name: "php", path: "/category/php" },
    { name: "react", path: "/category/react" },
    { name: "javascript", path: "/category/javascript" }
  ];

  const tags: string[] = ["react", "wordpress"];
  expect(connectTagLinks(allTags)(tags)).toStrictEqual([
    allTags[0],
    allTags[2]
  ]);
});
