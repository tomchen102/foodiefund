import React from "react";
import { motion, TargetAndTransition } from "framer-motion";

const animations: Record<string, TargetAndTransition> = {
  _13_601_rectangle_39233: {
    opacity: [0, 1],
    transition: {
      opacity: {
        type: "keyframes",
        ease: [0, 0, 1, 1],
        times: [0, 0.16041461006910168],
        duration: 2.026,
      },
      background: {
        type: "keyframes",
        ease: [
          [0, 0, 1, 1],
          [0, 0, 1, 1],
        ],
        times: [0, 0.16238894373149063, 0.9960513326752222],
        duration: 2.026,
      },
    },
    background: ["rgba(64,224,208,1)", "rgba(64,224,208,1)", "rgba(254,71,16,1)"],
  },
  _13_596_rectangle_39233: {
    opacity: [0, 0, 1],
    transition: {
      opacity: {
        type: "keyframes",
        ease: [
          [0, 0, 1, 1],
          [0, 0, 1, 1],
        ],
        times: [0, 0.832675222112537, 1],
        duration: 2.026,
      },
    },
  },
  _13_597_rectangle_39233: {
    opacity: [0, 0, 1],
    transition: {
      opacity: {
        type: "keyframes",
        ease: [
          [0, 0, 1, 1],
          [0, 0, 1, 1],
        ],
        times: [0, 0.6648568608094768, 0.8385982230997039],
        duration: 2.026,
      },
    },
  },
  _13_598_rectangle_39233: {
    opacity: [0, 0, 1],
    transition: {
      opacity: {
        type: "keyframes",
        ease: [
          [0, 0, 1, 1],
          [0, 0, 1, 1],
        ],
        times: [0, 0.16189536031589338, 0.3390918065153011],
        duration: 2.026,
      },
    },
  },
  _13_599_rectangle_39233: {
    opacity: [0, 0, 1],
    transition: {
      opacity: {
        type: "keyframes",
        ease: [
          [0, 0, 1, 1],
          [0, 0, 1, 1],
        ],
        times: [0, 0.4876604146100691, 0.6683119447186574],
        duration: 2.026,
      },
    },
  },
  _13_600_rectangle_39233: {
    opacity: [0, 0, 1],
    transition: {
      opacity: {
        type: "keyframes",
        ease: [
          [0, 0, 1, 1],
          [0, 0, 1, 1],
        ],
        times: [0, 0.33464955577492594, 0.4906219151036525],
        duration: 2.026,
      },
    },
  },
};

const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-75">
      <motion.div className="absolute h-16 w-16" animate={animations._13_601_rectangle_39233}></motion.div>
      <motion.div className="absolute h-16 w-16" animate={animations._13_596_rectangle_39233}></motion.div>
      <motion.div className="absolute h-16 w-16" animate={animations._13_597_rectangle_39233}></motion.div>
      <motion.div className="absolute h-16 w-16" animate={animations._13_598_rectangle_39233}></motion.div>
      <motion.div className="absolute h-16 w-16" animate={animations._13_599_rectangle_39233}></motion.div>
      <motion.div className="absolute h-16 w-16" animate={animations._13_600_rectangle_39233}></motion.div>
    </div>
  );
};

export default Loading;
