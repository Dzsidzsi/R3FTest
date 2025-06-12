import { Vector3 } from "three";
export default class Wall {
  guid: string;
  start: Vector3;
  end: Vector3;
  thickness: number;
  height: number;

  constructor(
    guid: string = crypto.randomUUID(),
    start: Vector3,
    end: Vector3,
    thickness: number,
    height: number
  ) {
    this.guid = guid;
    this.start = start;
    this.end = end;
    this.thickness = thickness;
    this.height = height;
  }

  toJson(): string {
    const direction = this.end.clone().sub(this.start).normalize();
    const up = new Vector3(0, 1, 0).multiplyScalar(this.height);
    const normal = direction.clone().cross(up).normalize();

    const A = this.start
      .clone()
      .add(normal.clone().multiplyScalar(-this.thickness / 2));

    const B = this.end
      .clone()
      .add(normal.clone().multiplyScalar(-this.thickness / 2));

    const C = this.end
      .clone()
      .add(normal.clone().multiplyScalar(this.thickness / 2));

    const D = this.start
      .clone()
      .add(normal.clone().multiplyScalar(this.thickness / 2));

    const E = A.clone().add(up);
    const F = B.clone().add(up);
    const G = C.clone().add(up);
    const H = D.clone().add(up);

    const faces = [
      //Front
      {
        guid: crypto.randomUUID(),
        type: "polygon",
        vertices: [B.x, B.y, B.z, F.x, F.y, F.z, G.x, G.y, G.z, C.x, C.y, C.z],
      },
      //Back
      {
        guid: crypto.randomUUID(),
        type: "polygon",
        vertices: [A.x, A.y, A.z, D.x, D.y, D.z, H.x, H.y, H.z, E.x, E.y, E.z],
      },
      //Top
      {
        guid: crypto.randomUUID(),
        type: "polygon",
        vertices: [H.x, H.y, H.z, G.x, G.y, G.z, F.x, F.y, F.z, E.x, E.y, E.z],
      },
      //Bottom
      {
        guid: crypto.randomUUID(),
        type: "polygon",
        vertices: [A.x, A.y, A.z, B.x, B.y, B.z, C.x, C.y, C.z, D.x, D.y, D.z],
      },
      //Left
      {
        guid: crypto.randomUUID(),
        type: "polygon",
        vertices: [A.x, A.y, A.z, E.x, E.y, E.z, F.x, F.y, F.z, B.x, B.y, B.z],
      },
      //right
      {
        guid: crypto.randomUUID(),
        type: "polygon",
        vertices: [D.x, D.y, D.z, C.x, C.y, C.z, G.x, G.y, G.z, H.x, H.y, H.z],
      },
    ];

    const obj = {
      guid: "${this.guid}",
      type: "Wall",
      parameters: {
        start: [this.start.x, this.start.y, this.start.z],
        end: [this.end.x, this.end.y, this.end.z],
        thickness: this.thickness,
        height: this.height,
      },
      children: faces,
    };
    return JSON.stringify(obj);
  }
}
