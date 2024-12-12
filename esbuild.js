const esbuild = require('esbuild');
const path = require('path');
const fs = require('fs');

// Read build.json
const build_json = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'court_ui/public/build.json'), 'utf-8')
);

// Create build configuration for each bundle
async function build() {
  try {
    // Build CSS
    for (let [outfile, files] of Object.entries(build_json)) {
      if (outfile.endsWith('.css')) {
        const cssContent = files
          .map(file => fs.readFileSync(path.join(__dirname, 'court_ui', file), 'utf-8'))
          .join('\n');

        await esbuild.build({
          stdin: {
            contents: cssContent,
            loader: 'css',
          },
          outdir: path.join(__dirname, 'court_ui/public/dist/css'),
          entryNames: '[name]',
          bundle: true,
          minify: true,
        });
      }
    }

    // Build JS
    for (let [outfile, files] of Object.entries(build_json)) {
      if (outfile.endsWith('.js')) {
        await esbuild.build({
          entryPoints: files.map(file => path.join(__dirname, 'court_ui', file)),
          outdir: path.join(__dirname, 'court_ui/public/dist/js'),
          entryNames: '[name]',
          bundle: true,
          minify: true,
          format: 'iife',
          globalName: 'court_ui',
          target: ['es2015'],
        });
      }
    }

    console.log('Build completed successfully');
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

build();