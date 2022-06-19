import { generateClasses } from '@formkit/themes'
import formkitTheme from './src/components/StyledComponents/formkitTheme.js'

const config = {
    config: {
        classes: generateClasses(formkitTheme)
    }
};

export default config;