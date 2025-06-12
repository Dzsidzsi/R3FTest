import type { Route } from "./+types/home";
import { Demo } from "../demo/Demo";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dijkstra Viewer" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <Demo />;
}
