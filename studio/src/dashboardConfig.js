export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fb0f169a30abc535454b3b8',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-f4s7d8ho',
                  apiId: '39ccba6d-69d9-4b56-af60-6e3fc4b79b5e'
                },
                {
                  buildHookId: '5fb0f169999739465d505e10',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-ot4jjkm2',
                  apiId: 'c9756e09-8107-456e-a7b3-4d6fb12e706d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ollydixon/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-ot4jjkm2.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
