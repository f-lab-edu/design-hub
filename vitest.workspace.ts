import { defineWorkspace } from "vitest/config";

export default defineWorkspace(["packages/*/vitest.config.{e2e,unit}.ts"]);
