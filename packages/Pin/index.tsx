import React, { useState, useEffect } from 'react';

export interface PinProps {
  id: string,
  body: string,
  color?: string,
  pitch?: string,
  yaw?: string
}

export default function Pin({ }: PinProps) {
  return (
    <div>
      Some Pin
    </div>
  )
}  