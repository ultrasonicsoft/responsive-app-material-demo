import { LayoutItem } from "./layout-item.model";

export interface Layout {
  name: string;
  gridColumns: number;
  layoutItem: LayoutItem[];
}
