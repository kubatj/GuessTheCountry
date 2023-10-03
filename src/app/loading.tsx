import { PageSkeleton } from "@/ui/PageSkeleton";
import { BarLoader } from "react-spinners";

export default function Loading() {
  return (
    <main className="h-screen flex items-center justify-center">
      <BarLoader color="#36d67f" width={300} height={6} />
    </main>
  );
}
