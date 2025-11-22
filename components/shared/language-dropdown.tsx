'use client'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { Languages } from 'lucide-react'
import Image from 'next/image'
import { lngs } from '@/constants'
import Link from 'next/link'
import { cn, getCurrentLng } from '@/lib/utils'
import { useParams } from 'next/navigation'

interface Props {
	isMobile?: boolean
}

const LanguageDropdown = ({ isMobile = false }: Props) => {
	const { lng } = useParams()
	return (
		<div>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button
						variant={'ghost'}
						size={'icon'}
						className={cn(
							isMobile && 'w-full bg-primary hover:bg-primary/80 h-12'
						)}
					>
						<Languages />
						{isMobile && (
							<span className='ml-2 font-space-grotesk font-medium'>
								{getCurrentLng(lng as string)}
							</span>
						)}
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent asChild>
					<DropdownMenuGroup>
						{lngs.map((item) => (
							<Link key={item.route} href={`/${item.route}`}>
								<DropdownMenuItem
									className={cn(
										`cursor-pointer`,
										lng === item.route && 'bg-secondary'
									)}
								>
									<Image
										src={`/assets/locales/${item.route}.png`}
										alt={item.label}
										width={30}
										height={30}
										className='pr-2'
									/>
									<span className='font-space-grotesk font-medium'>
										{item.label}
									</span>
								</DropdownMenuItem>
							</Link>
						))}
					</DropdownMenuGroup>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	)
}

export default LanguageDropdown
