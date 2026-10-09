export const inputClassName =
  "mt-2 block w-full rounded-sm border border-canopy/25 bg-limewash px-4 py-3 text-base " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-canopy " +
  "aria-[invalid=true]:border-alert";

// Keep only text fields, and drop Next's internal "$ACTION_…" keys.
export function formDataToRecord(formData: FormData): Record<string, string> {
  const record: Record<string, string> = {};
  for (const [key, value] of formData) {
    if (typeof value === "string" && !key.startsWith("$")) record[key] = value;
  }
  return record;
}

export function fieldA11y(id: string, errors: readonly string[] | undefined) {
  return errors?.length
    ? ({ "aria-invalid": true, "aria-describedby": `${id}-error` } as const)
    : {};
}
