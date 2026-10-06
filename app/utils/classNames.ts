/**
 * Utility function for combining CSS class names
 */
export function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}
