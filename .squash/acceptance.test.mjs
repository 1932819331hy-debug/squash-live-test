// FROZEN ACCEPTANCE TEST — this file is the contract for the bounty.
// Squash freezes its content hash when the bounty is posted. The solver must make
// BOTH assertions pass against their delivered commit. It must FAIL on the current
// (buggy) code, which is what unlocks funding.
import { test } from "node:test";
import assert from "node:assert/strict";
import { humanBytes } from "../lib.mjs";

test("formats megabyte-scale values as MB", () => {
  assert.equal(humanBytes(1048576), "1 MB"); // currently returns "1024 KB" — this is the bug
});

test("still formats kilobyte-scale values as KB", () => {
  assert.equal(humanBytes(1024), "1 KB");
});
