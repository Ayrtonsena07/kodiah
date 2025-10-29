import React from "react";

interface ClientRootProps {
  promptLabel?: string;
  children?: React.ReactNode;
}

const ClientRoot: React.FC<ClientRootProps> = ({ children, promptLabel }) => (
  <>
    {promptLabel ? <label>{promptLabel}</label> : null}
    {children}
  </>
);

export default ClientRoot;
