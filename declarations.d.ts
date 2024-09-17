// declarations.d.ts or another .d.ts file
declare module '*.svg' {
  import { FC, SVGProps } from 'react';
  const ReactComponent: FC<SVGProps<SVGSVGElement>>;
  export { ReactComponent };
  const src: string;
  export default src;
}
