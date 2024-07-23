import Image from "next/image";
import { TProductFeature } from "@/types";

type ProductFeatureProps = Omit<TProductFeature, "displayOnHomepage">;

export default function ProductFeature({ title, description, imageSrc, offsetImgInYAxis }: ProductFeatureProps) {
  return (
    <div className="grid max-w-[21.875rem] auto-rows-min grid-cols-1 gap-12">
      <div className="h-18 place-self-center">
        <Image
          src={imageSrc}
          alt=""
          height={72}
          width={72}
          className={`${offsetImgInYAxis ? "translate-y-1/2" : null}`}
        />
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-center text-4.5/6.25 font-bold">{title}</p>
        <p className="text-center text-3.75/6.25">{description}</p>
      </div>
    </div>
  );
}
