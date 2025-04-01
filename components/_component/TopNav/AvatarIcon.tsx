'use client'

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import Link from "next/link";

interface Props {
  _id: string;
  src?: string; 
  alt?: string; 
  fallback?: string; 
}

export function AvatarIcon({ _id, src, alt, fallback }: Props) {
  return (
    <Link href={`/Profile/${_id}`}>
      <Avatar className="  border p-1">
        <AvatarImage src={src || "/no-image-icon.png"} alt={alt || "local"}  />
        <AvatarFallback>{fallback || "LL"}</AvatarFallback>
      </Avatar>
    </Link>
  );
}