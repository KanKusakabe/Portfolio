const dictionaries = {
  en: {
    main: () =>
      import("./dictionaries/en/main.json").then((module) => module.default),
    works: () =>
      import("./dictionaries/en/works.json").then((module) => module.default),
  },
  ja: {
    main: () =>
      import("./dictionaries/ja/main.json").then((module) => module.default),
    works: () =>
      import("./dictionaries/ja/works.json").then((module) => module.default),
  },
};

export const getDictionary = async (locale) => {
  const main = await dictionaries[locale].main();
  const works = await dictionaries[locale].works();

  return {
    main,
    works,
  };
};
