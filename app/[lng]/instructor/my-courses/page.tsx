import Header from '../_components/header'
import InstructorCourseCard from '@/components/cards/instructor.course.card'
import { getCourses } from '@/actions/course.action'

const Page = async () => {
	const courses = await getCourses()
	return (
		<>
			<Header title='My courses' description='Here are your latest courses' />
			<div className='mt-4 grid grid-cols-3 gap-4'>
				{courses.map((item, idx) => (
					<InstructorCourseCard
						key={idx}
						course={JSON.parse(JSON.stringify(item))}
					/>
				))}
			</div>
		</>
	)
}

export default Page
