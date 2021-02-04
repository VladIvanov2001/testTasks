import React from "react";
import { ArchimageImage } from "./ArchimageImage";
import { BanditImage } from "./BanditImage";
import { BishopImage } from "./BishopImage";
import { CentaurImage } from "./CentaurImage";
import { ElfArcherImage } from "./ElfArcher";
import { MonkImage } from "./MonkImage";
import { SirenImage } from "./Siren";
import { SkeletonImage } from "./SkeletonImage";
import { SkeletonMageImage } from "./SkeletonMageImage";

export const UnitImages: { [key: string]: React.FC } = {
  ArchimageImage,
  BanditImage,
  BishopImage,
  CentaurImage,
  ElfArcherImage,
  MonkImage,
  SirenImage,
  SkeletonImage,
  SkeletonMageImage,
};
