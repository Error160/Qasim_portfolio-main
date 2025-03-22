const path = require('path')
 
module.exports = {
  output: 'export',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    unoptimized: true,
  },
  exportPathMap: async function() {
    return {
      '/blog': { page: '/blog' },
      // Add other working pages here
      // Skip the problematic home page (/)
    };
  },
}