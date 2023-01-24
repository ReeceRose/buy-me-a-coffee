import Image from 'next/image';

import { CreatorProps } from '@/lib/props/';

export const CreatorHeader = ({ creator }: CreatorProps): JSX.Element => {
  return (
    <>
      <div className="w-full px-6 m-auto text-center ">
        <div className="relative h-64 overflow-hidden bg-gray-500 rounded-lg">
          <div className="absolute top-0 right-0 block w-full h-full">
            <Image
              className="object-cover h-full min-w-full"
              layout="fill"
              alt="Creator banner image"
              src={creator.bannerImageUrl}
            />
          </div>
        </div>
      </div>
      <div className="relative flex flex-col w-full mt-16 mb-6 break-words">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="flex justify-center w-full px-4">
              <div className="relative overflow-hidden border-8 border-white rounded-full w-36 h-36 -m-44">
                <Image
                  alt={creator.username}
                  objectFit="cover"
                  layout="fill"
                  src={creator.profileImageUrl}
                  className="absolute align-middle bg-gray-500"
                />
              </div>
            </div>
            <div className="w-full px-4 -mt-12 text-center ">
              <div className="flex justify-center pt-8 lg:pt-4">
                <div className="text-center ">
                  <span className="block text-3xl font-bold tracking-wide">
                    {creator.username}
                  </span>
                  <span className="block mt-1 text-xl tracking-wide">
                    {creator.description}
                  </span>
                  <span className="block mt-5 text-lg tracking-wide text-gray-500">
                    {creator.supporters} supporters
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
