import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function snakeCaseToTitleCase(str: string | undefined) {

  if (typeof str !== 'string') {
    return ''; 
  }

  return str.toLowerCase()
    .replace(/_/g, " ") 
    .replace(/\b\w/g, (char) => char.toUpperCase()); 
}