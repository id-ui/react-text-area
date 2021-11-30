import { useEffect } from 'react';

export default ({ value, elementRef, canResize }) => {
  useEffect(() => {
    if (value) {
      const updateHeight = () => {
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
      };

      updateHeight();
    }
  }, [canResize, elementRef, value]);
};
