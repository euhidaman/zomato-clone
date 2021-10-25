import React from 'react'

const ColoredLine = ({ color }) => (
    <div className="py-2 colored-line">
        <hr
            style={{
                marginLeft: 185,
                color: "red",
                backgroundColor: "red",
                width: 200,
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
