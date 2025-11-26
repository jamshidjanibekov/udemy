import {
	Contact,
	FileCode,
	GaugeCircle,
	Home,
	ListVideo,
	MessageSquareMore,
	MonitorPlay,
	Rss,
	Settings2,
} from 'lucide-react'
import {
	DiCisco,
	DiCreativecommonsBadge,
	DiDjango,
	DiDocker,
	DiGhost,
	DiGithubFull,
	DiLess,
	DiMailchimp,
	DiMeteorfull,
	DiNetmagazine,
	DiNginx,
	DiStylus,
	DiYahoo,
} from 'react-icons/di'

export const navLinks = [
	{ route: '/', name: 'navLink1', icon: Home },
	{ route: 'courses', name: 'navLink2', icon: ListVideo },
	{ route: 'blogs', name: 'navLink3', icon: Rss },
	{ route: 'contacts', name: 'navLink4', icon: Contact },
]
export const lngs = [
	{ route: 'en', label: 'English' },
	{ route: 'uz', label: 'Uzbekistan' },
	{ route: 'ru', label: 'Russian' },
	{ route: 'tr', label: 'Turkce' },
]

export const companies = [
	DiCisco,
	DiCreativecommonsBadge,
	DiGhost,
	DiGithubFull,
	DiMeteorfull,
	DiLess,
	DiMailchimp,
	DiNetmagazine,
	DiNginx,
	DiStylus,
	DiYahoo,
	DiDjango,
	DiDocker,
]

export const filterCourses = [
	{ label: 'cateogry1', name: 'all' },
	{ label: 'cateogry2', name: 'trending' },
	{ label: 'cateogry3', name: 'popular' },
	{ label: 'cateogry4', name: 'featured' },
]

export const filterLevels = [
	{ label: 'level1', name: 'all' },
	{ label: 'level2', name: 'beginner' },
	{ label: 'level3', name: 'intermediate' },
	{ label: 'level4', name: 'advanced' },
]

export const courses = [
	{
		title: 'JavaScript',
		level: 'Beginner',
		previewImage:
			'https://www.sammi.ac/_next/image?url=https%3A%2F%2Fqk9g5hsrut.ufs.sh%2Ff%2Fxu965PmyvPo01pCyzWVJWIAxq9EjKgNoL7zftvlDbOmru0H2&w=1920&q=75&dpl=dpl_9sBEKp6Vtq4rX75YeLkgkG6tPcnw',
		author: {
			image:
				'https://blog.sammi.app/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FKmuGvX9oRjYkG3bzttvc&w=1920&q=75',
			name: 'Chris Impley',
		},
		oldPrice: 179,
		currentPrice: 79,
	},
	{
		title: 'ReactJS',
		level: 'Intermidate',
		previewImage:
			'https://www.sammi.ac/_next/image?url=https%3A%2F%2Fqk9g5hsrut.ufs.sh%2Ff%2Fxu965PmyvPo0iUp6fYhocXUlvFEwuZWOT81zHSksDrGxN4f9&w=1920&q=75&dpl=dpl_9sBEKp6Vtq4rX75YeLkgkG6tPcnw',
		author: {
			image:
				'https://blog.sammi.app/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FKmuGvX9oRjYkG3bzttvc&w=1920&q=75',
			name: 'Chris Impley',
		},
		oldPrice: 159,
		currentPrice: 59,
	},
	{
		title: 'VueJS',
		level: 'Intermidate',
		previewImage:
			'https://www.sammi.ac/_next/image?url=https%3A%2F%2Fqk9g5hsrut.ufs.sh%2Ff%2Fxu965PmyvPo0pJtmiWIV0jo2XA16Ydy4rSfwLIiRxv98gOuk&w=1920&q=75&dpl=dpl_9sBEKp6Vtq4rX75YeLkgkG6tPcnw',
		author: {
			image:
				'https://blog.sammi.app/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FKmuGvX9oRjYkG3bzttvc&w=1920&q=75',
			name: 'Chris Impley',
		},
		oldPrice: 129,
		currentPrice: 29,
	},
	{
		title: 'Telegram BOT',
		level: 'Intermidate',
		previewImage:
			'https://www.sammi.ac/_next/image?url=https%3A%2F%2Fqk9g5hsrut.ufs.sh%2Ff%2Fxu965PmyvPo0FM6vDAPKdjJrMesifW4Gtho7ID1zXTlQ025w&w=1920&q=75&dpl=dpl_9sBEKp6Vtq4rX75YeLkgkG6tPcnw',
		author: {
			image:
				'https://blog.sammi.app/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FKmuGvX9oRjYkG3bzttvc&w=1920&q=75',
			name: 'Chris Impley',
		},
		oldPrice: 209,
		currentPrice: 109,
	},
	{
		title: 'React Native',
		level: 'Intermidate',
		previewImage:
			'https://www.sammi.ac/_next/image?url=https%3A%2F%2Fqk9g5hsrut.ufs.sh%2Ff%2Fxu965PmyvPo0UVXRCCHlS4Qy1xdrtYVH8eZKj5upDiUCm7hs&w=1920&q=75&dpl=dpl_9sBEKp6Vtq4rX75YeLkgkG6tPcnw',
		author: {
			image:
				'https://blog.sammi.app/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FKmuGvX9oRjYkG3bzttvc&w=1920&q=75',
			name: 'Chris Impley',
		},
		oldPrice: 129,
		currentPrice: 29,
	},
	{
		title: 'Foundation',
		level: 'Intermidate',
		previewImage:
			'https://www.sammi.ac/_next/image?url=https%3A%2F%2Fqk9g5hsrut.ufs.sh%2Ff%2Fxu965PmyvPo00Gmjkh79cpx21MsQhvWPLIgeAHGwlaumbU8j&w=1920&q=75&dpl=dpl_9sBEKp6Vtq4rX75YeLkgkG6tPcnw',
		author: {
			image:
				'https://blog.sammi.app/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FKmuGvX9oRjYkG3bzttvc&w=1920&q=75',
			name: 'Chris Impley',
		},
		oldPrice: 209,
		currentPrice: 109,
	},
]

export const categories = [
	{
		icon: '/assets/categories/digital-marketing.svg',
		label: 'Digital Marketing',
	},
	{ icon: '/assets/categories/web-development.svg', label: 'Web Development' },
	{ icon: '/assets/categories/graphic-design.svg', label: 'Graphic Design' },
	{ icon: '/assets/categories/photography.svg', label: 'Photography' },
	{ icon: '/assets/categories/social-sciences.svg', label: 'Social Sciences' },
	{ icon: '/assets/categories/art-humanities.svg', label: 'Art & Humanities' },
	{
		icon: '/assets/categories/personal-development.svg',
		label: 'Personal Development',
	},
	{ icon: '/assets/categories/it-software.svg', label: 'IT & Software' },
]

export const instructors = [
	{
		name: 'Chris Impley',
		image:
			'https://static.independent.co.uk/2023/05/01/11/be5fda0ecbee4f69e504b721f23a0608Y29udGVudHNlYXJjaGFwaSwxNjgzMDIyNTM1-2.71789316.jpg?quality=75&width=990&crop=3%3A2%2Csmart&auto=webp',
		job: 'Web Developer',
	},
	{
		name: 'Thomas Winter',
		image:
			'https://static.independent.co.uk/2023/05/01/11/be5fda0ecbee4f69e504b721f23a0608Y29udGVudHNlYXJjaGFwaSwxNjgzMDIyNTM1-2.71789316.jpg?quality=75&width=990&crop=3%3A2%2Csmart&auto=webp',
		job: 'Photographer',
	},
	{
		name: 'Emma Watson',
		image:
			'https://static.independent.co.uk/2023/05/01/11/be5fda0ecbee4f69e504b721f23a0608Y29udGVudHNlYXJjaGFwaSwxNjgzMDIyNTM1-2.71789316.jpg?quality=75&width=990&crop=3%3A2%2Csmart&auto=webp',
		job: 'Digital Marketer',
	},
	{
		name: 'John Doe',
		image:
			'https://static.independent.co.uk/2023/05/01/11/be5fda0ecbee4f69e504b721f23a0608Y29udGVudHNlYXJjaGFwaSwxNjgzMDIyNTM1-2.71789316.jpg?quality=75&width=990&crop=3%3A2%2Csmart&auto=webp',
		job: 'Designer',
	},
]

export const learningJourney = [
	{
		title: 'startTitle1',
		excerpt: 'startDescription1',
		image: '/assets/journey/rating.png',
	},
	{
		title: 'startTitle2',
		excerpt: 'startDescription2',
		image: '/assets/journey/science.png',
	},
	{
		title: 'startTitle3',
		excerpt: 'startDescription3',
		image: '/assets/journey/online-learning.png',
	},
	{
		title: 'startTitle4',
		excerpt: 'startDescription4',
		image: '/assets/journey/certificate.png',
	},
]

export const instructorNavLinks = [
	{
		label: 'Dashboard',
		route: '/instructor',
		icon: GaugeCircle,
	},
	{
		label: 'My Courses',
		route: '/instructor/my-courses',
		icon: MonitorPlay,
	},
	{
		label: 'Create Course',
		route: '/instructor/create-course',
		icon: FileCode,
	},
	{
		label: 'Reviews',
		route: '/instructor/reviews',
		icon: MessageSquareMore,
	},
	{
		label: 'Settings',
		route: '/instructor/settings',
		icon: Settings2,
	},
]

export const courseLevels = ['begginer', 'intermediate', 'advanced']

export const courseCategory = [
	'front-end',
	'back-end',
	'full-stack',
	'mobile',
	'desktop',
	'game',
]

export const courseLanguage = ['english', 'uzbek', 'russian', 'turkish']
