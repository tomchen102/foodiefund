"use client";
import Image from "next/image";
import { Children, cloneElement, isValidElement, ReactNode, useState } from "react";

import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";

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
      } else if (isValidElement(child)) {
        // 使用泛型來正確處理props的類型
        const elementChild = child as React.ReactElement<{ children?: ReactNode }>;

        // 檢查是否為圖片元素
        if (elementChild.type === "img" || elementChild.type === Image) {
          return elementChild;
        }

        // 處理子元素
        const childrenProp = elementChild.props.children;
        const newChildren = Children.map(childrenProp, traverseChildren);

        // 使用類型斷言來安全地處理props
        return cloneElement<{ children?: ReactNode }>(elementChild, {
          ...elementChild.props,
          children: newChildren,
        });
      }
      return null;
    };

    return Children.map(children, traverseChildren);
  };

  return (
    <div className="mb-6">
      <div className="block lg:hidden">
        <div className={`text-xl leading-relaxed text-gray-700 ${!isExpanded ? styles["fade-out"] : ""}`}>
          {isExpanded ? children : renderPreview(children, previewLength)}
        </div>
        {!isExpanded && (
          <Button onClick={toggleContent} variant="outline" className="w-full font-bold">
            展開內容
            <Icons.ArrowDown className="text-black" />
          </Button>
        )}
      </div>
      <div className="hidden lg:block">
        <div className="text-xl leading-relaxed text-gray-700">{children}</div>
      </div>
    </div>
  );
};

export default ExpandableContent;
