import { usePathname } from 'next/navigation'

type PathsResult = {
  page: string;
  pathname: string;
};

export const usePaths = (): PathsResult => {
  const pathname = usePathname();
  const path = pathname.split('/');
  const page = path[path.length - 1];
  return { page, pathname };
};
