export function cn(...classes: string[]) {
  return Array.from(new Set(classes.filter(Boolean).join(' ').split(' '))).join(' ')
}
