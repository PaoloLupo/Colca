import { generateClasses } from '@formkit/themes'
import formkitTheme from './src/formkitTheme.js'

const config = {
    config: {
        classes: generateClasses(formkitTheme)
    }
};

export default config;