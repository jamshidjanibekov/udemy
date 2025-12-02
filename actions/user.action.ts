'use server'

import { connectToDatabase } from '@/lib/mongose'
import { ICreateUser, IUpdateUser } from './types'
import User from '@/database/user.model'

export const createUser = async (data: ICreateUser) => {
	try {
		await connectToDatabase
		const { clerkId, fullName, email, picture } = data
		const isExist = await User.findOne({ clerkId })

		if (isExist) {
			const updateUser = await User.findOneAndUpdate(
				{ email },
				{ fullName, picture, clerkId },
				{ new: true }
			)
			return updateUser
		}
		const newUser = await User.create(data)
		return newUser
	} catch (error) {
		throw new Error('Something went wrong while creating user!')
	}
}

export const updateUser = async (data: IUpdateUser) => {
	try {
		await connectToDatabase
		const { clerkId, updatedData } = data
		const updatedUser = await User.findOneAndUpdate({ clerkId }, updatedData, {
			new: true,
		})
		return updatedUser
	} catch (error) {
		throw new Error('Something went wrong while updating user!')
	}
}
