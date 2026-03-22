import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemas'
// Trim any accidental whitespace from env var (e.g. trailing newline from CLI piping)
const projectId = (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? '').trim()
const dataset = (process.env.NEXT_PUBLIC_SANITY_DATASET || 'production').trim()
const apiVersion = '2024-01-01'

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
