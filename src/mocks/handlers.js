import { rest } from "msw";
import posts from "./posts";

export const handlers = [
  // rest.post("/login", (req, res, ctx) => {
  //   sessionStorage.setItem("is-authenticated", true);
  //   return res(ctx.status(200));
  // }),

  rest.get("/posts", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ data: posts }));
  }),
];
