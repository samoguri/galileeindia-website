import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

type Props = {
  id: string;
  label: string;
  onTap: () => void;
  index?: number;
};

function SortableItem({ id, label, onTap, index }: Props) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      role="button"
      tabIndex={0}
      onClick={onTap}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onTap();
        }
      }}
      {...attributes}
      {...listeners}
      className={`touch-none select-none inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2.5 text-sm sm:text-base font-medium text-gray-900 dark:text-gray-100 shadow-sm cursor-grab active:cursor-grabbing hover:border-blue-300 dark:hover:border-blue-600 transition ${
        isDragging ? "opacity-40" : ""
      }`}
    >
      {typeof index === "number" && (
        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-900 dark:bg-blue-600 text-white text-xs font-bold shrink-0">
          {index + 1}
        </span>
      )}
      {label}
    </div>
  );
}

export default SortableItem;
