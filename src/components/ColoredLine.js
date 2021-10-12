import React from 'react'

const ColoredLine = ({ color }) => (
    <div className="py-2">
        <hr className = "w-15 md:ml-14"
            style={{
                color: "red",
                backgroundColor: "red",
                height: 3
            }}
        />

        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: 1
            }}
        />
    </div>
);

export default ColoredLine
