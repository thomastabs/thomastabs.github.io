/* giscus comments (GitHub Discussions on this repo, category "Notebook").
   Fill repoId and categoryId from https://giscus.app — see README → Comments.
   While either starts with "TODO:", posts show a TODO note instead of loading giscus. */
export const giscus = {
  repo: 'thomastabs/thomastabs.github.io',
  repoId: 'TODO: repo-id from giscus.app',
  category: 'Notebook',
  categoryId: 'TODO: category-id from giscus.app',
  mapping: 'pathname',
  themeLight: 'noborder_light',
  themeDark: 'noborder_dark',
};

export const giscusReady = !giscus.repoId.startsWith('TODO') && !giscus.categoryId.startsWith('TODO');
