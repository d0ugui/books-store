import supabase from "../src/services/supabase";

import BlurImage from "../src/components/BlurImage";

import { ImageType } from '../src/types/image';

export async function getStaticProps() {
  const { data } = await supabase
    .from('books')
    .select('*')
    .order('id')

  return {
    props: {
      images: data
    }
  }
}

export default function Gallery({ images }: { images: ImageType[] }) {
  return (
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 relative">
        {images.map((image) => (
          <BlurImage key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
}