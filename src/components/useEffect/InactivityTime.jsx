import { useState, useEffect, useRef } from "react";

export const InactivityTime = () => {
  const [isInactive, setIsInactive] = useState(false);
  const [inactivityTime, setInactivityTime] = useState(0);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const startTimer = () => {
      timeoutRef.current = setTimeout(() => {
        intervalRef.current = setInterval(() => {
          setInactivityTime((prevTime) => prevTime + 1);
        }, 1000);
      }, 3000);
    };

    startTimer();

    const handleActivity = () => {
      setInactivityTime(0);
      setIsInactive(false);
      clearTimeout(timeoutRef.current);
      clearInterval(intervalRef.current);
      startTimer(); // Reinicia el temporizador de espera de 3 segundos
    };

    window.addEventListener("mousemove", handleActivity);
    window.addEventListener("keydown", handleActivity);

    return () => {
      window.removeEventListener("mousemove", handleActivity);
      window.removeEventListener("keydown", handleActivity);
      clearTimeout(timeoutRef.current);
      clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    if (inactivityTime >= 3) {
      setIsInactive(true);
    }
  }, [inactivityTime]);

  return (
    <section className="card-primary">
      <h2 className="heading-primary">
        <span className="heading-gradient">INACTIVITY TIME</span>
      </h2>
      <p>
        {inactivityTime > 30
          ? "Usuario inactivo"
          : `Tiempo de inactividad: ${inactivityTime}`}
      </p>
    </section>
  );
};
