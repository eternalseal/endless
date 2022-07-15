import { API_URL } from '../../environment';

export type VersionContent = {
  title: string;
  body: string;
  effectiveDate: string;
  time: number;
};
export type Content = {
  id: string;
  stepNumber: string;
  versionContent: VersionContent[];
};

export type Response = Content[];

export const getContent = () => {
  return {
    api() {
      return fetch(`${API_URL}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => data as Response)
        .then((content) => {
          return content
            .sort((a, b) => Number(a.stepNumber) - Number(b.stepNumber))
            .map((content) => {
              const { versionContent, ...rest } = content;
              const newVersionContent = content.versionContent
                .map((versionContent) => {
                  const { effectiveDate, ...rest } = versionContent;
                  const time = new Date(effectiveDate).getTime();
                  return {
                    ...rest,
                    effectiveDate,
                    time,
                  };
                })
                .sort((a, b) => b.time - a.time)
                .filter((_, i) => i === 0);
              return {
                ...rest,
                versionContent: newVersionContent,
              };
            });
        });
    },
    getKey() {
      return ['content', 'get'];
    },
  };
};
