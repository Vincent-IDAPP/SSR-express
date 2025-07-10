require('esbuild').build({
  entryPoints: ['server/server.jsx'],
  bundle: true,
  platform: 'node',
  target: ['node20'],
  outfile: 'dist/server.cjs',  // <--- ici en .cjs
  format: 'cjs',               // <--- format CommonJS
  external: ['express', 'react', 'react-dom', 'react-dom/server', 'node-fetch'],
}).catch(() => process.exit(1));
