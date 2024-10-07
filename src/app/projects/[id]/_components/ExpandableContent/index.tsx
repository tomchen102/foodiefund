"use client";
import React, { ReactNode, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaArrowDown } from "react-icons/fa6";
import styles from "./index.module.css";

interface ExpandableContentProps {
  children: ReactNode;
  previewLength: number;
}

const ExpandableContent = ({ children, previewLength }: ExpandableContentProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded(true);
  };

  const renderPreview = (children: ReactNode, previewLength: number): ReactNode => {
    let length = 0;

    const traverseChildren = (child: ReactNode): ReactNode | null => {
      if (length >= previewLength) return null;

      if (typeof child === "string") {
        if (length + child.length > previewLength) {
          const remainingLength = previewLength - length;
          length = previewLength;
          return child.substring(0, remainingLength) + "...";
        } else {
          length += child.length;
          return child;
        }
      } else if (React.isValidElement(child)) {
        if (child.type === "img" || child.type === Image) {
          return child;
        }
        const newChildren = React.Children.map(child.props.children, traverseChildren);
        return React.cloneElement(child, { ...child.props, children: newChildren });
      }
      return null;
    };

    return React.Children.map(children, traverseChildren);
  };

  return (
    <div className="mb-6">
      <div className="block lg:hidden">
        <div className={`text-base leading-relaxed text-gray-700 ${!isExpanded ? styles["fade-out"] : ""}`}>
          {isExpanded ? children : renderPreview(children, previewLength)}
        </div>
        {!isExpanded && (
          <Button onClick={toggleContent} variant="outline" className="w-full text-sm font-bold">
            展開內容 <FaArrowDown className="ml-1" />
          </Button>
        )}
      </div>
      <div className="hidden lg:block">
        <div className="text-base leading-relaxed text-gray-700">{children}</div>
      </div>
    </div>
  );
};

export default ExpandableContent;
