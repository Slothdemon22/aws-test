// src/components/Spinner.tsx
const Spinner = () => (
    <svg
      className="w-6 h-6 text-white animate-spin"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
        className="opacity-25"
      />
      <path
        d="M4 12a8 8 0 0 1 16 0 8 8 0 0 1-16 0"
        fill="currentColor"
      />
    </svg>
  );
  
  export default Spinner;
  