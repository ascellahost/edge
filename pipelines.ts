import { serve } from "https://deno.land/std@0.117.0/http/server.ts";

const ASCELLA_REPO = "ascellahost/tsunami";

serve((req) => {
  const url = new URL(req.url);
  const path = url.pathname.replace("/", "");
  if (path == "latest") {
    return Response.redirect(
      `https://nightly.link/${ASCELLA_REPO}/workflows/commit/main/ascella-x86_64-linux.zip`,
    );
  } else {
    return Response.redirect(
      `https://nightly.link/${ASCELLA_REPO}/actions/runs/${path}/ascella-x86_64-linux.zip`,
    );
  }
}, { addr: ":3001" });
