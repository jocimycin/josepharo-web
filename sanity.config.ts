import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemas'
import { projectId, dataset, apiVersion } from './lib/sanity'

export default defineConfig({
  name: 'josepharo-web',
  title: 'Joseph Aro — Content Studio',

  projectId,
  dataset,
  apiVersion,

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Writing & Articles')
              .child(
                S.list()
                  .title('Articles')
                  .items([
                    S.listItem()
                      .title('Published')
                      .child(
                        S.documentList()
                          .title('Published Articles')
                          .filter('_type == "post" && status == "published"')
                      ),
                    S.listItem()
                      .title('Drafts')
                      .child(
                        S.documentList()
                          .title('Drafts')
                          .filter('_type == "post" && status == "draft"')
                      ),
                    S.listItem()
                      .title('All Articles')
                      .child(S.documentTypeList('post').title('All Articles')),
                  ])
              ),
            S.divider(),
            S.listItem()
              .title('Categories')
              .child(S.documentTypeList('category').title('Categories')),
            S.listItem()
              .title('Tags')
              .child(S.documentTypeList('tag').title('Tags')),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
