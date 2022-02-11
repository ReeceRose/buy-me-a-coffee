import Image from 'next/image';

import { CreatorProps } from 'lib/types/props';

export const CreatorHeader = ({ creator }: CreatorProps): JSX.Element => {
  return (
    <>
      <div className="w-full px-6 m-auto text-center">
        <div className="relative h-64 overflow-hidden bg-gray-500 rounded-lg">
          <div className="absolute top-0 right-0 block w-full h-full">
            <Image
              className="object-cover h-full min-w-full"
              layout="fill"
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
                  className="absolute align-middle"
                />
              </div>
            </div>
            <div className="w-full px-4 -mt-10 text-center">
              <div className="flex justify-center py-4 pt-8 lg:pt-4">
                <div className="p-3 text-center">
                  <span className="block text-3xl font-bold tracking-wide text-blueGray-600">
                    {creator.username}
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
