import { useDroppable } from "@dnd-kit/core";
import { SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";
import type { ReactNode } from "react";

type Props = {
  id: string;
  title: string;
  items: string[];
  emptyHint: string;
  children: ReactNode;
};

function PuzzleColumn({ id, title, items, emptyHint, children }: Props) {
  const { setNodeRef, isOver } = useDroppable({ id });

  return (
    <div className="flex-1 min-w-0">
      <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-3 text-center">
        {title}
      </h3>

      <div
        ref={setNodeRef}
        className={`min-h-[140px] rounded-2xl border-2 border-dashed p-4 flex flex-wrap content-start gap-2.5 transition ${
          isOver
            ? "border-blue-400 bg-blue-50 dark:bg-blue-950/30"
            : "border-gray-200 dark:border-gray-700"
        }`}
      >
        <SortableContext items={items} strategy={rectSortingStrategy}>
          {items.length === 0 ? (
            <p className="w-full text-sm text-gray-400 dark:text-gray-500 text-center py-6">
              {emptyHint}
            </p>
          ) : (
            children
          )}
        </SortableContext>
      </div>
    </div>
  );
}

export default PuzzleColumn;
