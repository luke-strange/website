import lume from "lume/mod.ts";
import basePath from "lume/plugins/base_path.ts";
import favicon from "lume/plugins/favicon.ts";
import metas from "lume/plugins/metas.ts";
import nav from "lume/plugins/nav.ts";
import postcss from "lume/plugins/postcss.ts";
import googleFonts from "lume/plugins/google_fonts.ts";


const site = lume({
    src: './src',
    location: new URL("https://lukestrange.uk"),
});

site.use(basePath());
// site.use(favicon());
site.use(metas());
site.use(nav());
site.use(postcss());

site.use(googleFonts({
    fonts:
      "https://fonts.google.com/share?selection.family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900",
  }));

export default site;
