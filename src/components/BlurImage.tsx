import Image from "next/image";
import { useState } from "react";

import cn from "../../src/utils/combineClass";

import { ImageType } from "../../src/types/image";

export default function BlurImage({ image }: { image: ImageType }) {
  const [isLoading, setLoading] = useState(true);

  return (
    <a href={image.imageSrc} className="group relative">
      <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-[7/8]">
        <Image
          alt=""
          src={image.imageSrc}
          layout="responsive"
          width={350}
          height={400}
          objectFit="cover"
          className='group-hover:opacity-75 duration-700 ease-in-out rounded-lg grayscale blur-2xl scale-110'
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
      <p className="mt-2 text-lg font-semibold text-gray-900">{image.name}</p>
      <h2 className="mt-1 text-sm text-gray-700">R$ {image.price}</h2>
    </a>
  );
}