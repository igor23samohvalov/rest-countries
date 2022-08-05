import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const LoaderContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, 0);
`;

function Loader() {
  return (
    <LoaderContainer>
      <AnimatePresence>
        <motion.div
          className="lds-facebook"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div />
          <div />
          <div />
        </motion.div>
      </AnimatePresence>
    </LoaderContainer>
  );
}

export default Loader;
