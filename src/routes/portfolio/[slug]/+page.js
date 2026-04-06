export async function load({ params }) {
	const posts = import.meta.glob('$lib/collections/portfolio/*.md', { eager: true })

	const match = Object.entries(posts).find(([path]) => path.includes(params.slug))

	if (!match) {
		return {
			status: 404,
		}
	}

  const post = match[1]
  
	return {
		post: {
			component: post.default,
			meta: post.metadata,
		},
	}
}
