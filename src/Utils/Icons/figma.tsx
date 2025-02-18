import React from "react";

interface figmaIconsProps {
  [key: string]: ((stroke?: string) => React.JSX.Element);
}
let figmaIcons: figmaIconsProps = {
  apple: () => (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
      <g fill="#000000" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" text-anchor="none" style={{ mixBlendMode: "normal" }}><g transform="scale(5.33333,5.33333)"><path d="M40.084,32.613c-0.848,1.835 -1.254,2.655 -2.342,4.274c-1.521,2.264 -3.67,5.089 -6.326,5.109c-2.361,0.018 -2.971,-1.507 -6.176,-1.482c-3.204,0.016 -3.872,1.51 -6.237,1.484c-2.654,-0.022 -4.688,-2.568 -6.21,-4.826c-4.259,-6.34 -4.707,-13.768 -2.076,-17.721c1.861,-2.803 4.807,-4.449 7.572,-4.449c2.817,0 4.588,1.514 6.916,1.514c2.262,0 3.638,-1.517 6.896,-1.517c2.464,0 5.07,1.313 6.931,3.575c-6.09,3.262 -5.101,11.763 1.052,14.039z"></path><path d="M30.046,12.072c1.269,-1.577 2.232,-3.804 1.882,-6.072c-2.069,0.138 -4.491,1.418 -5.905,3.075c-1.282,1.51 -2.345,3.752 -1.931,5.922c2.259,0.069 4.597,-1.233 5.954,-2.925z"></path><path d="M36.736,20.421c-8.736,9.58 -16.736,0.58 -27.508,7.421c0.375,3.027 1.53,6.303 3.565,9.331c1.521,2.258 3.556,4.804 6.21,4.826c2.365,0.025 3.033,-1.469 6.237,-1.484c3.205,-0.024 3.814,1.5 6.176,1.482c2.656,-0.021 4.805,-2.846 6.326,-5.109c1.088,-1.619 1.494,-2.439 2.342,-4.274c-5.206,-1.926 -6.695,-8.3 -3.348,-12.193z"></path></g></g>
    </svg>
  )
};

export default figmaIcons;
