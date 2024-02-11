import { useEffect, useState } from 'react';

export default function AuthStateHandler({ ...props }) {
	const [initializing, setInitializing] = useState(true);
	const [user, setUser] = useState();

	function onAuthStateChanged(user: any) {
		setUser(user);
		if (initializing) setInitializing(false);

		console.log('User:', user);
	}

	useEffect(() => {
		// const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
		const subscriber = null;
		// return subscriber; // unsubscribe on unmount
	}, []);

	return <>{props.children}</>;
}
