import lume from "lume/mod.ts";
import theme from "theme/mod.ts";

const site = lume({
    src: './src',
    location: new URL("https://lukestrange.uk"),
});

site.use(theme());

export default site;
