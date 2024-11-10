import React, { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <main className="bg-background h-screen">
      <div className="ml-4 mr-4 lg:ml-24 lg:mr-24">{children}</div>
    </main>
  );
};

export default Wrapper;
