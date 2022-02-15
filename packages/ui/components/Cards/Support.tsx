import { Creator } from 'lib/types';
import { useState } from 'react';

import { DynamicIcon } from '../Icons/';

type CreatorProps = {
  creator: Creator;
  onClick: (creator_wallet: string, amount: number) => Promise<void>;
};

export const SupportCard = ({
  creator,
  onClick,
}: CreatorProps): JSX.Element => {
  const [quantity, setQuanity] = useState<number>(creator.support.defaults[0]);

  return (
    <>
      <div className="flex items-center content-center justify-center w-full mt-12">
        <div className="container ">
          <div className="flex flex-col-reverse items-center lg:flex-row">
            <div className="w-full text-center lg:w-7/12">
              Posts for: {creator.username}
            </div>
            <div className="w-full mx-auto lg:w-5/12">
              <div className="p-6 m-8 border border-gray-200 rounded-lg lg:w-4/5">
                <div className="text-2xl font-bold">
                  Buy <span className="text-gray-400">{creator.username}</span>{' '}
                  a {creator.support.item}
                </div>
                <div className="p-4 mt-4 border border-orange-400 rounded-lg bg-orange-50 ">
                  <div className="flex items-center justify-center">
                    <DynamicIcon
                      icon={creator.support.icon}
                      className="text-4xl text-orange-400"
                    />{' '}
                    <span className="mx-4 text-gray-400">X</span>
                    {creator.support.defaults.map((q) => (
                      <button
                        onClick={() => setQuanity(q)}
                        className={
                          (quantity == q
                            ? 'text-white bg-orange-400'
                            : 'text-orange-400 bg-white') +
                          ' w-10 h-10 m-2 text-sm font-bold uppercase  rounded-full shadow outline-none  hover:shadow-lg focus:outline-none'
                        }
                        key={q}
                        value={q}
                      >
                        {q}
                      </button>
                    ))}
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuanity(Number(e.target.value))}
                      className="relative w-16 h-10 px-3 text-sm bg-white rounded shadow outline-none focus:outline-none focus:shadow-outline"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <input
                    type="text"
                    placeholder="Name or @yourtwitter (optional)"
                    className="relative w-full px-3 py-3 text-base bg-white border rounded outline-none focus:outline-none focus:shadow-outline"
                  />
                  <textarea
                    placeholder="Say something nice... (optioanl)"
                    className="w-full px-3 py-3 mt-3 text-base bg-white border rounded outline-none focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mt-4">
                  <button
                    className="w-full px-6 py-3 mb-1 mr-1 text-base font-bold text-white uppercase transition-all duration-150 ease-linear bg-orange-400 rounded-full shadow outline-none hover:shadow-lg focus:outline-none"
                    type="button"
                    onClick={() =>
                      onClick(
                        creator.wallet,
                        quantity * creator.support.pricePerItem
                      )
                    }
                  >
                    Support ${quantity * creator.support.pricePerItem}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
