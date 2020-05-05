import React, { useState, useEffect } from 'react';
import Pin, { PinProps } from '../Pin';

const board = {
    id: "tech",
    pins: {
        "1": { id: "1", body: "hi there", color: "yellow", pitch: "123", yaw: "123" },
        "2": { id: "2", body: "remember this", color: "yellow", pitch: "123", yaw: "123" },
    }
}

export default function Board() {
    return <div>
        {
            Object.values(board.pins).map((p: PinProps) => <Pin key={p.id} {...p} />)
        }
    </div>
}