import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
  const post = await import(`../../../lib/news/${params.slug}.md`);
  const { title, date } = post.metadata;
  const Content = post.default;

  return {
    Content,
    title,
    date,
  }
}