import Renderer from "~/renderer/Renderer";
import { ViewerAPI } from "../framework/ViewerAPI";
import { useState } from "react";
import Client from "~/client/Client";
import { FrameworkEvents } from "~/framework/Events";
export function Demo() {
  const [framework, setFramework] = useState<ViewerAPI>(new ViewerAPI());
  const [client, setClient] = useState<Client>(new Client(framework));

  const [msg, setMsg] = useState<string>("");
  framework.on(FrameworkEvents.StatusMessage, (payload) =>
    setMsg(payload.message)
  );

  return (
    <main style={{ backgroundColor: "gray" }}>
      <label>{msg}</label>
      <button
        onClick={() => client.createWall()}
        style={{
          backgroundColor: "orange",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        Add Wall
      </button>
      <Renderer framework={framework}></Renderer>
    </main>
  );
}
