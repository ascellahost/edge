/**
 * Deno deply embed service
 * fetches the backend to check if a image exists and sends some plain,
 * for various services to be able to embed the image as intended
 *
 * We use deno deploy since its faster than sveltekit dynamic routes!
 */

import { serve } from "https://deno.land/std@0.117.0/http/server.ts";
import indx from "../cloudflare/src/index.ts";

await serve(indx.fetch, { addr: ":3000" });
