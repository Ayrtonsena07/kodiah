import React from "react";

interface ClientRootProps {
 
  children?: React.ReactNode;
}

const ClientRoot: React.FC<ClientRootProps> = ({ children }) => (
  <>
    
    {children}
  </>
);

export default ClientRoot;
