import React, { useEffect, useState } from 'react';

const ISTClock = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();

      // Convert to IST (UTC +5:30)
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const istOffset = 5.5 * 60 * 60 * 1000; // IST is UTC +5:30
      const ist = new Date(utc + istOffset);

      const hours = ist.getHours().toString().padStart(2, '0');
      const minutes = ist.getMinutes().toString().padStart(2, '0');
      const seconds = ist.getSeconds().toString().padStart(2, '0');

      setTime(`${hours}:${minutes}:${seconds}`);
    };

    updateClock(); // Initial call
    const timer = setInterval(updateClock, 1000); // Update every second

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  return (
    <div className="mt-4 text-xs text-gray-500 text-center" style={{fontSize: 20}}>
      IST: <span className="font-mono">{time}</span> 🤍
    </div>
  );
};

export default ISTClock;
