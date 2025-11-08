'use client';
import React from 'react';
import Snowfall from 'react-snowfall';

export default function SnowfallEffect() {
  return (
    <Snowfall
      snowflakeCount={150}
      color="white"
      style={{
        position: 'fixed',
        width: '100%',
        height: '100%',
        zIndex: 1,
        top: 0,
        left: 0,
        pointerEvents: 'none',
      }}
    />
  );
}
