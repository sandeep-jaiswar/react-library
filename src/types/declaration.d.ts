declare module "glob" {
  import minimatch = require("minimatch");

  interface IOptions extends minimatch.IOptions {
    ignore?: string | string[] | undefined;
  }

  interface Glob {
    minimatch: typeof minimatch;
  }
}

declare module "minimatch" {
  export interface IOptions {
    debug?: boolean;
    nobrace?: boolean;
    noglobstar?: boolean;
    dot?: boolean;
    noext?: boolean;
    nocase?: boolean;
    nonull?: boolean;
    matchBase?: boolean;
    nocomment?: boolean;
    nonegate?: boolean;
    flipNegate?: boolean;
    ignore?: string | string[];
    onIgnore?: (item: string) => void;
    onMatch?: (item: string) => void;
    nullglob?: boolean;
    realpath?: boolean;
    cache?: any;
    stat?: any;
    sync?: boolean;
    nounique?: boolean;
  }

  function minimatch(
    path: string,
    pattern: string,
    options?: IOptions
  ): boolean;
}
