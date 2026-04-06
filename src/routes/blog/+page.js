export function load() {
	const posts = import.meta.glob('$lib/collections/blog/*.md', { eager: true })

	const allPosts = Object.entries(posts)
		.map(([path, post]) => {
			const slug = path.split('/').pop().replace('.md', '')

			return {
				meta: post.metadata,
				slug,
			}
		})
		.toSorted((a, b) => new Date(b.meta.date) - new Date(a.meta.date))

	return {
		posts: allPosts,
	}
}
