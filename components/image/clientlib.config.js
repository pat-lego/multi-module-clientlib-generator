const path = require("path");

const BUILD_DIR = path.join(__dirname, 'dist');

const CLIENTLIB_DIR = path.join(
    __dirname,
    'ui.apps',
    'src',
    'main',
    'content',
    'jcr_root',
    'apps',
    'aem',
    'support',
    'components',
    'image',
    'clientlibs'
);


const libsBaseConfig = {
    allowProxy: true,
    serializationFormat: 'xml',
    cssProcessor: ['default:none', 'min:none'],
    jsProcessor: ['default:none', 'min:none']
};

module.exports = {
    context: BUILD_DIR,
    clientLibRoot: CLIENTLIB_DIR,
    libs: [
        {
            ...libsBaseConfig,
            name: 'clientlib-site',
            categories: ['clientlib-support-image.site'],
            assets: {
                js: {
                    flatten: "false",
                    cwd: BUILD_DIR, 
                    // Copy entrypoint scripts and stylesheets into the respective ClientLib
                    // directories
                    files: [
                        "**/*.js"
                    ]
                },
                css: {
                    flatten: "false",
                    cwd: BUILD_DIR, 
                    // Copy entrypoint scripts and stylesheets into the respective ClientLib
                    // directories
                    files: [
                        "**/*.css"
                    ]
                }
                
            },
            // Copy all other files into the `resources` ClientLib directory
            resources: {
                cwd: 'clientlib-support-image',
                files: ['**/*.*'],
                flatten: false,
                ignore: ['**/*.js', '**/*.css']
            }
        }
    ]
}