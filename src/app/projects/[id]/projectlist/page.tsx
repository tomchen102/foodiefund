"use client";
import { useEffect, useState } from "react";
import Rewards from "../@Rewards/page";
import "./index.css";

const RewardsBar = () => {
  const [isDragging, setIsDragging] = useState(false); // 拖動狀態
  const [startX, setStartX] = useState(0); // 開始拖動的位置
  const [scrollLeft, setScrollLeft] = useState(0); // 初始滾動位置
  const [prevX, setPrevX] = useState(0);
  useEffect(() => {
    const scrollbar = document.querySelector(".scrollbar") as HTMLElement;
    const scrollbarThumb = document.querySelector(".scrollbar-thumb") as HTMLElement;
    const scrollContent = document.querySelector(".scroll-content") as HTMLElement;

    if (!scrollbar || !scrollbarThumb || !scrollContent) {
      console.error("Scrollbar elements not found");
      return;
    }

    // 更新 scrollbar-thumb 寬度
    function updateScrollbarThumb() {
      const scrollRatio = scrollContent.clientWidth / scrollContent.scrollWidth;
      scrollbarThumb.style.width = `${scrollbar.clientWidth * scrollRatio}px`;
    }

    // 同步滾動條和內容滾動位置
    const handleScrollContentScroll = () => {
      scrollbar.scrollLeft = scrollContent.scrollLeft;
      const scrollRatio = scrollContent.scrollLeft / (scrollContent.scrollWidth - scrollContent.clientWidth);
      scrollbarThumb.style.transform = `translateX(${scrollRatio * (scrollbar.clientWidth - scrollbarThumb.clientWidth)}px)`;
    };

    // 開始拖動
    const handleMouseDown: (e: MouseEvent) => void = (e) => {
      setIsDragging(true);

      // 儲存開始時的 X 位置，這裡要考慮到 scrollbarThumb 的當前偏移量
      setStartX(e.pageX - scrollbarThumb.getBoundingClientRect().left); // 記錄滑鼠點擊時的位置與 thumb 偏移量
      setScrollLeft(scrollbar.scrollLeft); // 儲存當前的滾動位置
      e.preventDefault(); // 防止默認行為
    };

    // 拖動過程
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      e.preventDefault(); // 防止默認行為

      const x = e.pageX - scrollbar.getBoundingClientRect().left; // 滑鼠在 scrollbar 中的當前位置
      const walk = x - startX; // 計算滑鼠拖動的距離（新的 X 減去開始的 X）

      // 計算新的滾動位置
      const newScrollLeft = scrollLeft + walk * (scrollContent.scrollWidth / scrollbar.clientWidth); // 根據比例調整
      scrollbar.scrollLeft = newScrollLeft; // 更新滾動條位置
      scrollContent.scrollLeft = newScrollLeft; // 同步內容區域的滾動位置

      // 更新上一個 X 位置，並檢查拖動方向
      if (e.pageX > prevX) {
        console.log("Scrolling right");
      } else if (e.pageX < prevX) {
        console.log("Scrolling left");
      }
      setPrevX(e.pageX);

      console.log(`Scrollbar position: ${scrollbar.scrollLeft}`); // 調試
    };

    // 結束拖動
    const handleMouseUp = () => {
      setIsDragging(false); // 停止拖動
    };

    // 初始化 thumb 的寬度
    updateScrollbarThumb();
    scrollContent.addEventListener("scroll", handleScrollContentScroll);
    window.addEventListener("resize", updateScrollbarThumb);

    // 綁定拖動事件
    scrollbarThumb.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    // 清理事件監聽器
    return () => {
      scrollContent.removeEventListener("scroll", handleScrollContentScroll);
      window.removeEventListener("resize", updateScrollbarThumb);
      scrollbarThumb.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, startX, scrollLeft]);

  return (
    <div className="scroll-container w-full">
      <div className="mb-8 bg-gray-100">
        <p className="py-2 text-center">左右捲動看看更多選項</p>
        <div className="scrollbar">
          <div className="scrollbar-thumb"></div>
        </div>
      </div>
      <Rewards />
    </div>
  );
};

export default RewardsBar;
