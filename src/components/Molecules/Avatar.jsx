import React from "react";
import defaultImage from "/src/assets/logo.png";

/**
 * @param {Object} props
 * @param {"sm" | "base" | "lg"} [props.size] - 아바타 크기
 * @param {string} [props.alt] - 대체텍스트
 * @param {string} [props.image] - 이미지
 */

export default function Avatar({ size, image, alt }) {
  return (
    <div className={`avatar ${size}`}>
      <img src={image || defaultImage} alt={alt} />
    </div>
  );
}
