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
                  buildHookId: '5eb4340c5a27a208c2661645',
                  title: 'Sanity Studio',
                  name: 'ss1-studio',
                  apiId: '4a06a642-3167-44d1-a52f-ad4b917481b2'
                },
                {
                  buildHookId: '5eb4340ca2b27c8f2c584d72',
                  title: 'Blog Website',
                  name: 'ss1-web',
                  apiId: '48ab5da7-932c-4d24-976e-26caa7e1af51'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/githubnot/ss1',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://ss1-web.netlify.app', category: 'apps' }
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
