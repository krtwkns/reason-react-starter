/** require css file */
/** require scss file */
[@bs.val] external requireStyle: string => unit = "require";

/* require an asset (eg. an image) and return exported string value (image URI) */
[@bs.val] external requireImage: string => string = "require";
