export interface Project {
    id: number;
    attributes: {
      slug: string;
      name: string;
      year: string;
      stack: {
        name: string[];
      };
      client: string;
      demo: {
        web: string;
        webUrl: string;
      };
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      locale: string;
      postDescription: string;
      shortDescription: string;
      case: {
        data: {
          id: number;
          attributes: {
            name: string;
            alternativeText: null | string;
            caption: null | string;
            width: number;
            height: number;
            formats: {
              thumbnail: {
                ext: string;
                url: string;
                hash: string;
                mime: string;
                name: string;
                path: null | string;
                size: number;
                width: number;
                height: number;
              };
            };
            hash: string;
            ext: string;
            mime: string;
            size: number;
            url: string;
            previewUrl: null | string;
            provider: string;
            provider_metadata: null | Record<string, unknown>;
            createdAt: string;
            updatedAt: string;
          };
        };
      };
      postImg: {
        data: {
          id: number;
          attributes: {
            name: string;
            alternativeText: null | string;
            caption: null | string;
            width: number;
            height: number;
            formats: {
              small: {
                ext: string;
                url: string;
                hash: string;
                mime: string;
                name: string;
                path: null | string;
                size: number;
                width: number;
                height: number;
              };
              thumbnail: {
                ext: string;
                url: string;
                hash: string;
                mime: string;
                name: string;
                path: null | string;
                size: number;
                width: number;
                height: number;
              };
            };
            hash: string;
            ext: string;
            mime: string;
            size: number;
            url: string;
            previewUrl: null | string;
            provider: string;
            provider_metadata: null | Record<string, unknown>;
            createdAt: string;
            updatedAt: string;
          };
        };
      };
      localizations: {
        data: unknown[];
      };
      tags: {
        data: unknown[];
      };
    };
  }