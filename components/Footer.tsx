import React from "react";

const Footer = () => {
  return (
    <footer className="text-center mb-10 px-4 text-gray-500">
      <small className="mb-2 text-xs block">
        Copyright &copy; 2024 by prince sunsara. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React and Next.js (App Router & Server Actions), Typescript, Tailwind
        CSS, Framer Motion, React Email & Resend, Vercel Hosting.
      </p>
    </footer>
  );
};

export default Footer;
