import * as React from "react";
// import { Link } from 'react-router-dom';
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import './Logo.css';


export default function Logo({ start }) {
  const boxVariants = {
    checked: { scale: 1, background: "rgba(255, 255, 255, 1)" },
    unchecked: { scale: 0.8, background: "rgba(255, 255, 255 ,0.5)" }
  };

  const checkVariants = {
    checked: { pathLength: 0.9 },
    unchecked: { pathLength: 0 }
  };

  const [isChecked, setIsChecked] = React.useState(true);
  const pathLength = useMotionValue(0);
  const opacity = useTransform(pathLength, [0.05, 0.15], [0, 1]);
  const handleStart = () => {
    setTimeout(() => {
      start()
    }, 1000);
  }
  return (
    <>
        <AnimatePresence>
            <motion.div className='temp' >
                {/* <Link to="/home" > */}
                <div className='logos-container'>
                  <div className='logo-intro'>All That Apply</div>
                  <motion.div
                      style={{
                        width: 150,
                        height: 150,
                        borderRadius: 30,
                        backgroundColor: "rgba(255,255,255,0.5)",
                        cursor: "pointer"
                      }}
                      variants={boxVariants}
                      initial={"unchecked"}
                      animate={ !isChecked ? "checked" : "unchecked" }
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      onTap={() => setIsChecked(!isChecked)}
                      onClick={handleStart}
                      >
                      <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150">
                          <motion.path
                          d="M38 74.707l24.647 24.646L116.5 45.5"
                          fill="transparent"
                          strokeWidth="20"
                          stroke="#59b3e1"
                          strokeLinecap="round"
                          variants={checkVariants}
                          style={{ pathLength: pathLength, opacity: opacity }}
                          />
                      </svg>
                  </motion.div>
                </div>
                {/* </Link> */}
                  <motion.div 
                    className='intro-help'
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 3 }}
                      >check box to enter
                  </motion.div>
            </motion.div>
        </AnimatePresence>
    </>
  );
}