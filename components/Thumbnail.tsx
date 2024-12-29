import React from "react";
import Image from "next/image";
import { getFileIcon } from "@/lib/utils";

interface Props {
  type: string;
  extension: string;
  url?: string;
}

const Thumbnail = ({ type, extension, url = "" }: Props) => {
  const isImage = type === "image" && extension !== "svg";

  return (
    <figure>
      <Image src={isImage ? url : getFileIcon(extension, type)} alt="" />
    </figure>
  );
};

export default Thumbnail;
