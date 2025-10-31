import { useEffect, useRef } from 'react';

function useEventListener(target, type, handler, ...options)
{
	if (!target || !type || !handler) { console.warn('useEventListener: Missing required parameters'); return; }

	const handlerRef = useRef(handler);

	useEffect(() => { handlerRef.current = handler; }, [handler]);
	useEffect
	(
		() =>
		{
			const defaultOptions = (type === 'scroll') ? { passive: true } : {};
			const finalOptions = Object.assign({}, defaultOptions, ...options);

			const eventListener = (event) => handlerRef.current(event);

			target.addEventListener(type, eventListener, finalOptions);

			return () => { target.removeEventListener(type, eventListener, finalOptions); };
		}, [target, type, ...options]
	);
}

export default useEventListener;