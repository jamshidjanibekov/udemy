import { gql, request } from 'graphql-request'
import { IBlog } from '@/types'
import { cache } from 'react'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!

export const getBlogs = async () => {
	const query = gql`
		query MyQuery {
			blogs(where: { archive: false }) {
				title
				createdAt
				author {
					name
					image {
						url
					}
				}
				category {
					name
					slug
				}
				description
				tag {
					name
					slug
				}
				image {
					url
				}
				content {
					html
				}
				slug
			}
		}
	`

	const { blogs } = await request<{ blogs: IBlog[] }>(graphqlAPI, query)
	return blogs
}

export const getBlogBySlug = cache(async (slug: string) => {
	const query = gql`
		query MyQuery($slug: String!) {
			blog(where: { slug: $slug }) {
				title
				createdAt
				author {
					name
					image {
						url
					}
					bio
					id
				}
				category {
					name
					slug
				}
				description
				tag {
					name
					slug
				}
				image {
					url
				}
				content {
					html
				}
				slug
			}
		}
	`
	const { blog } = await request<{ blog: IBlog }>(graphqlAPI, query, { slug })
	return blog
})
