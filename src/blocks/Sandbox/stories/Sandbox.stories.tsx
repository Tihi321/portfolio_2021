import { boolean, text } from "@storybook/addon-knobs";
import { Meta } from "@storybook/react";
import React from "react";

import {
  EIframePermissions,
  EPermissions,
  Sandbox as SandboxComponent
} from "../Sandbox";

export const Sandbox = () => {
  const title = text("Title", "Roadtrip", "OPTIONS");
  const source = text(
    "Source",
    "https://glitch.com/embed/#!/embed/svelte-roadtrip-animation?path=src/components/app.html&previewSize=50&sidebarCollapsed=true",
    "OPTIONS"
  );

  const geolocation = boolean("geolocation", true, "OPTIONS");
  const microphone = boolean("microphone", true, "OPTIONS");
  const camera = boolean("camera", true, "OPTIONS");
  const midi = boolean("midi", true, "OPTIONS");
  const encryptedMedia = boolean("encrypted-media", false, "OPTIONS");

  let permissions: EPermissions[] = [];

  if (geolocation) {
    permissions = [...permissions, "geolocation"];
  }

  if (microphone) {
    permissions = [...permissions, "microphone"];
  }

  if (camera) {
    permissions = [...permissions, "camera"];
  }

  if (midi) {
    permissions = [...permissions, "midi"];
  }

  if (encryptedMedia) {
    permissions = [...permissions, "encrypted-media"];
  }

  let iframePermissions: EIframePermissions[] = [];

  const scriptsPermission = boolean("allow-scripts", true, "OPTIONS");
  const sameOriginPermission = boolean("allow-same-origin", true, "OPTIONS");

  if (scriptsPermission) {
    iframePermissions = [...iframePermissions, "allow-scripts"];
  }

  if (sameOriginPermission) {
    iframePermissions = [...iframePermissions, "allow-same-origin"];
  }

  return (
    <SandboxComponent
      title={title}
      src={source}
      permissions={permissions}
      iframePermissions={iframePermissions}
    />
  );
};

const meta = {
  title: "Blocks/Sandbox"
};

export default meta as Meta;
