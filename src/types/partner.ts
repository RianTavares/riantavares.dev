export interface Partner {
    attributes: {
        createdAt: string;
        name: string;
        partnerImg: {
          data: {
            attributes: {
              alternativeText: string;
              url: string;
              width: number
            };
          };
        };
        url: string;
      },
      id: number;
  }