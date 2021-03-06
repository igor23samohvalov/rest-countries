import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from "framer-motion";

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 55vh;
`;

const Loader:React.FC = () => {

  return (
    <LoaderContainer>
      <AnimatePresence>
        <motion.div 
          className="lds-facebook" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div></div><div></div><div></div>
        </motion.div>
      </AnimatePresence>
    </LoaderContainer>
  );
};

export default Loader;