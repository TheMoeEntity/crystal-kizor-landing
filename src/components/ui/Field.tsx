import type { FieldProps } from "@/types/ui";

export function Field({ id, label, optional = false, errors, children }: FieldProps) {
  const message = errors?.[0];

  return (
    <div>
      <label htmlFor={id} className="font-medium">
        {label}
        {optional && <span className="text-stone font-normal"> (optional)</span>}
      </label>
      {children}
      {message && (
        <p id={`${id}-error`} className="text-alert mt-2">
          {message}
        </p>
      )}
    </div>
  );
}
