const fs = require('fs');
const path = require('path');

module.exports = config => {
    const storyPath = path.resolve(process.cwd(), config.projectRoot, config.relativeProjectRoot, config.componentPath, config.componentType, config.component, `${config.component}.stories.js`);
    let fileContents;

    try {
        if (fs.existsSync(storyPath)) fileContents = fs.readFileSync(storyPath, 'utf8');
        else {

            fileContents = `/**\n  * Storybook stories for the ${config.component} component\n  */\n`;

            if (config.jsFramework) {
                if (config.jsFramework === 'react') fileContents += `import React, { Component } from "${config.jsFramework}";\n`
                fileContents += `import { AsyncWrapper, HTMLWrapper } from "${config.jsFramework}-wrapper-components";\n`
                fileContents += `\n`;
            }

            fileContents += `export default { title: '${config.component}' };\n`;
        }
    } catch(err) {
        console.error(err)
    }
    
    config.stories.forEach( story => {
        if (!story.contentPath) {
            fileContents += `\n
const ${story.name}HTML = \`<div>${config.component} - ${story.name} - Markup Goes Here</div>\`;
export const ${story.name} = () => <HTMLWrapper html={${story.name}HTML} />;\n`
        }

        if (story.contentPath) {
            fileContents += `\n
const ${story.name}ContentPath = "${story.contentPath}";
export const ${story.name} = () => <AsyncWrapper contentPath={${story.name}ContentPath} />;\n`
        }
    });
    
    fs.writeFile(storyPath, fileContents, (err) => {
        if (err) throw err;
        console.log(`[storybook-aem] Created ${config.componentType}/${config.component}/${config.component}.stories.js`);
    });

    console.log(`[storybook-aem] Story file created for the ${config.component}, you can find it here: ${storyPath}`);
}