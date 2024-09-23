export const manifest: chrome.runtime.ManifestV3 = {
  manifest_version: 3,
  name: "O1js Repro",
  version: "0.0.1",
  background: {
    service_worker: "src/background.ts",
    type: "module",
  },
  cross_origin_embedder_policy: {
    value: "require-corp",
  },
  cross_origin_opener_policy: {
    value: "same-origin",
  },
};
