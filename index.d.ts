export type Options = {
  filter?: string;
  filterFn?: (readablePathString: string, pathArray: string[]) => boolean;
  debug?: boolean;
  print?: boolean;
};

export type Mutation = {
  path: string[];
  key: string;
  loc: {
    file: string;
    line: string;
    char: string;
  };
};

export default function whoDidThat<T>(obj: T, opts?: Options): T;

export function stats<T>(obj: T): Mutation[];
