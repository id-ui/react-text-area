import { useCallback, useEffect } from 'react';

export default ({ value, elementRef, canResize }) => {
  const updateHeight = useCallback(() => {
    if (!canResize || !elementRef.current) {
      return;
    }

    const { minHeight, borderWidth } = window.getComputedStyle(
      elementRef.current
    );

    const newMinHeight =
      elementRef.current.scrollHeight + (parseFloat(borderWidth) || 0) * 2;

    if (newMinHeight > (parseFloat(minHeight) || 0)) {
      elementRef.current.style.height = `${newMinHeight}px`;
      elementRef.current.style.overflowY = '';
    }
  }, [canResize, elementRef]);

  useEffect(() => {
    if (value) {
      updateHeight();
    }
  }, [updateHeight, value]);
};
