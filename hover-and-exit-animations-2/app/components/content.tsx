import { cn } from "../lib/utils";
import { Card } from "./ui/card";

export const Content = () => {
  return (
    <div className={cn("h-screen flex items-center justify-center bg-gray-50")}>
      <Card />
    </div>
  );
};
