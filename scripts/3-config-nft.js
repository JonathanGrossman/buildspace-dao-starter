import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xfDcd9b31705f746367348A466EaDFd5b4C0dd35F"
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Purple Tangerine",
        description:
          "This NFT will give you access to tag, a DAO where it pays to be it!",
        image: readFileSync("scripts/assets/default2.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
