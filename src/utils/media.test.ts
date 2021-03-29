import { Breakpoints, ESide, media } from "./media";

test("It should return correct media string for size in desktop range", () => {
  const mediaString = `@media (min-width: ${Breakpoints.DESKTOP[0]}px) and (max-width: ${Breakpoints.DESKTOP[1]}px)`;
  expect(media(Breakpoints.DESKTOP)).toBe(mediaString);
});

test("It should return correct media string for laptop size to the bottom", () => {
  const mediaString = `@media (max-width: ${Breakpoints.LAPTOP[1]}px)`;
  expect(media(Breakpoints.LAPTOP, ESide.DOWN)).toBe(mediaString);
});

test("It should return correct media string for mobile size and up", () => {
  const mediaString = `@media (min-width: ${Breakpoints.MOBILE[0]}px)`;
  expect(media(Breakpoints.MOBILE, ESide.UP)).toBe(mediaString);
});
