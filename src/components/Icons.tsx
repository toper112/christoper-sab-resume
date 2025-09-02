// MaleIcon.jsx
export function MaleIcon() {
  return (
    <div>
      <lord-icon
        src="https://cdn.lordicon.com/shcfcebj.json"
        trigger="hover"
        style={{ width: "100px", height: "100px" }}
      ></lord-icon>
    </div>
  );
}

// FemaleIcon.jsx
export function FemaleIcon() {
  return (
    <div>
      <lord-icon
        src="https://cdn.lordicon.com/ugejbvui.json"
        trigger="hover"
        style={{ width: "100px", height: "100px" }}
      ></lord-icon>
    </div>
  );
}

// declarations.d.ts
declare namespace JSX {
  interface IntrinsicElements {
    'lord-icon': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      src?: string;
      trigger?: string;
      colors?: string;
      style?: React.CSSProperties;
    };
  }
}
