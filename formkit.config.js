import { generateClasses } from "@formkit/themes";
import formkitTheme from "./src/components/Styles/formkitTheme.js";

const config = {
  config: {
    classes: generateClasses(formkitTheme),
  },
};

export default config;
