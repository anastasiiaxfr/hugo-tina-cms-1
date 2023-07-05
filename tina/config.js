import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "126c7fbe-d7ed-49ea-8841-a5b535fd8595", // Get this from tina.io
  token: "5647dec5e6d06b3c23c245d869982cbf5bf59577", // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            label: "Author",
            name: "author",
            type: "reference",
            collections: ["authors"]
          },
          {
            type: "datetime",
            name: "date",
            label: "DateTime",
            ui: {
              timeFormat: "hh:mm A"
            },
          },
          {
            type: 'image',
            label: 'Thumbnail',
            name: 'imgSrc',
          },
          {
            label: 'Tags',
            name: 'tags',
            type: 'string',
            list: true,
          },
          {
            label: 'Categories',
            name: 'categories',
            type: 'string',
            list: true,
            options: [
              {
                value: 'movies',
                label: 'Movies',
              },
              {
                value: 'music',
                label: 'Music',
              },
            ],
          },
          
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
          
        ],
      },
      {
        label: "Blogs",
        name: "blogs",
        path: "content/blogs",
        fields: [
            {
                type: "string",
                name: "title",
                label: "Title",
                isTitle: true,
                required: true,
            },
            {
                label: "Author",
                name: "author",
                type: "reference",
                collections: ["authors"]
              },
            {
                type: "datetime",
                name: "date",
                label: "DateTime",
                ui: {
                  timeFormat: "HH:mm"
                },
              },
            
              {
                type: 'image',
                label: 'Thumbnail',
                name: 'imgSrc',
              },
              {
                label: 'Tags',
                name: 'tags',
                type: 'string',
                list: true,
              },
              {
                label: 'Categories',
                name: 'categories',
                type: 'string',
                list: true,
                options: [
                  {
                    value: 'movies',
                    label: 'Movies',
                  },
                  {
                    value: 'music',
                    label: 'Music',
                  },
                ],
              },
            {
                type: "rich-text",
                name: "body",
                label: "Body",
                isBody: true,
            },
           
        ]
      },
      {
        name: "authors",
        label: "Authors",
        path: "content/authors",
        fields: [{
            type: "string",
            name: "name",
            label: "Name",
            isTitle: true,
            required: true,
          }]
      }
   


      

    ],
  },
});