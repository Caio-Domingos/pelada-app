import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setLogged, setLoggedOut } from '../store/slicers/auth.slicer';
import { CacheService } from '../services/cache.service';
import { UserService } from '../services/users.service';
import { User } from '../models/users/user.model';
import { Timestamp } from 'firebase/firestore';

export default function AuthStateHandler({ ...props }) {
	const dispatch = useDispatch();

	useEffect(() => {
		const auth = getAuth();
		onAuthStateChanged(auth, async (user) => {
			if (user) {
				// User is signed in
				const uid = user.uid;
				console.log('User is signed in! UID:', uid);
				// console.log(
				// 	'Cache All Keys and Values',
				// 	CacheService.seeAllKeysAndValues()
				// );

				const userService = new UserService();

				let userFirestore: User | null;
				try {
					userFirestore = await userService.getOne(uid);

					if (!userFirestore) {
						throw new Error('User not found');
					}

					if (userFirestore.createdAt) {
						userFirestore.createdAt = (userFirestore.createdAt as Timestamp)
							.toDate()
							.toISOString();
					}

					if (userFirestore.updatedAt) {
						userFirestore.updatedAt = (userFirestore.updatedAt as Timestamp)
							.toDate()
							.toISOString();
					}
				} catch (error) {
					console.log('Error on getting userFirestore', error);
					return;
				}

				dispatch(setLogged(userFirestore));
			} else {
				// User is signed out
				console.log('User is signed out!');
				dispatch(setLoggedOut());
			}
		});
		// return subscriber; // unsubscribe on unmount
	}, []);

	return null;
}
