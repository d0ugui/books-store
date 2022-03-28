import Image from "next/image";

export default function BlurImage() {
  return (
    <a href="#" className="group">
      <div className="aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden rounded-lg bg-gray-200">
        <Image
          alt=""
          src="https://bit.ly/placeholder-img"
          layout="fill"
          objectFit="cover"
          className="group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">Douglas Oliveira</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">@d0ugui</p>
    </a>
  )
}