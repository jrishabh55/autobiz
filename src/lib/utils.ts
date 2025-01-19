import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateSlug(name: string) {
  return name.toLowerCase().replace(/\s+/g, '-');
}

export function voidFunction<T>(fn: (...args: unknown[]) => T) {
  return (...args: unknown[]) => {
    fn(...args);
    return null;
  };
}
