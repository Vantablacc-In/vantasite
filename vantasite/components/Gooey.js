import Color from "color";
import Goo from "gooey-react";
import React from "react";

function Gooey() {
  let color = Color("#6600DB");

  let color1 = color.lighten(0.2); // "lightseagreen";
  let color2 = color.darken(0.4); // "mediumaquamarine";
  let color3 = color.darken(0.2); // "palegreen";
  let color4 = color; // "mediumspringgreen";
  let radius = 45;

  return (
    <div className="flex justify-evenly items-center ">
      <div>
        <Goo>
          <svg
            role="img"
            aria-label="Example of a gooey effect"
            className="w-64 h-64"
          >
            <g style={{ animation: "rotate_back 9s linear infinite" }}>
              <circle
                cx="50%"
                cy="50%"
                r={radius}
                fill={color1}
                style={{
                  animation: "blob_four 12s ease-in-out -3s infinite alternate",
                }}
              />
              <circle
                cx="50%"
                cy="50%"
                r={Math.floor(radius * 0.86)}
                fill={color2}
                style={{
                  animation: "blob_three 9s ease-in-out -3s infinite alternate",
                }}
              />
              <circle
                cx="50%"
                cy="50%"
                r={Math.floor(radius * 0.71)}
                fill={color3}
                style={{
                  animation: "blob_two 6s ease-in-out -3s infinite alternate",
                }}
              />
              <circle
                cx="50%"
                cy="50%"
                r={Math.floor(radius * 0.57)}
                fill={color4}
                style={{
                  animation: "blob_one 3s ease-in-out -3s infinite alternate",
                }}
              />
            </g>
          </svg>
        </Goo>
      </div>
      <div>
        <Goo>
          <svg
            role="img"
            aria-label="Example of a gooey effect"
            className="w-64 h-64"
          >
            <g style={{ animation: "rotate_back 9s linear infinite" }}>
              <circle
                cx="50%"
                cy="50%"
                r={radius}
                fill={color1}
                style={{
                  animation: "blob_four 12s ease-in-out -3s infinite alternate",
                }}
              />
              <circle
                cx="50%"
                cy="50%"
                r={Math.floor(radius * 0.86)}
                fill={color2}
                style={{
                  animation: "blob_three 9s ease-in-out -3s infinite alternate",
                }}
              />
              <circle
                cx="50%"
                cy="50%"
                r={Math.floor(radius * 0.71)}
                fill={color3}
                style={{
                  animation: "blob_two 6s ease-in-out -3s infinite alternate",
                }}
              />
              <circle
                cx="50%"
                cy="50%"
                r={Math.floor(radius * 0.57)}
                fill={color4}
                style={{
                  animation: "blob_one 3s ease-in-out -3s infinite alternate",
                }}
              />
            </g>
          </svg>
        </Goo>
      </div>
    </div>
  );
}

export default Gooey;
