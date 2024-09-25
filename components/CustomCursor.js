import { useEffect, useState, useCallback } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [trail, setTrail] = useState([]);
  const [isTouch, setIsTouch] = useState(false);

  const onMouseMove = useCallback((e) => {
    setPosition({ x: e.clientX, y: e.clientY });
    setTrail((prevTrail) => [
      { x: e.clientX, y: e.clientY },
      ...prevTrail.slice(0, 5),
    ]);
  }, []);

  useEffect(() => {
    const onMouseEnter = () => setVisible(true);
    const onMouseLeave = () => setVisible(false);

    if ('ontouchstart' in window) {
      setIsTouch(true);
      return;
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [onMouseMove]);

  if (isTouch || !visible) return null;

  return (
    <>
      <div
        className="cursor-dot"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      <div
        className="cursor-dot-outline"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      {trail.map((point, index) => (
        <div
          key={index}
          className="cursor-trail"
          style={{
            left: `${point.x}px`,
            top: `${point.y}px`,
            opacity: 1 - index * 0.2,
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;