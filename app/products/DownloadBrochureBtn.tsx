import Link from "next/link";
import React from "react";
import Button from "../componnets/Button";
import { IoMdDownload } from "react-icons/io";
import OpenDownloadBrochureForm from "../componnets/OpenDownloadBrochureForm";

export default function DownloadBrochureBtn() {
  return (
    <OpenDownloadBrochureForm>
      <Button
        icon={<IoMdDownload />}
        animation={true}
        className="button-shdow rounded-md text-gray-700 group-hover/readmore:text-white relative overflow-hidden group/readmore flex items-center gap-2 px-7 py-3"
      >
        Download Brochure
      </Button>
    </OpenDownloadBrochureForm>
  );
}
