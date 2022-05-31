import React from "react";

const MarketCard = () => {
  return (
    <div className="p-[20px] bg-[#080808] rounded-[8px] flex flex-row justify-between hover:cursor-pointer hover:drop-shadow-2xl">
      <div className="flex flex-col justify-center items-start">
        <div className="flex flex-row items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_132_3208)">
              <path
                d="M24 12C24 14.3734 23.2962 16.6935 21.9776 18.6668C20.659 20.6402 18.7849 22.1783 16.5922 23.0866C14.3994 23.9948 11.9866 24.2324 9.65887 23.7694C7.3311 23.3064 5.1929 22.1635 3.51467 20.4853C1.83644 18.8071 0.693551 16.6689 0.230529 14.3411C-0.232494 12.0133 0.00514596 9.60051 0.913398 7.4078C1.82165 5.21509 3.35972 3.34094 5.33311 2.02236C7.3065 0.703788 9.62658 0 12 0C15.1826 0 18.2348 1.26428 20.4852 3.51472C22.7357 5.76516 24 8.8174 24 12V12Z"
                fill="#F7931A"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.52872 5.47969L11.2865 6.21823L11.9029 3.92078L13.2818 4.29496L12.6895 6.4975L13.8142 6.79969L14.4076 4.57314L15.8105 4.94841L15.2062 7.18696C15.2062 7.18696 17.4971 7.69423 18.036 9.5575C18.5749 11.4208 16.8513 12.3993 16.3189 12.4364C16.3189 12.4364 18.3262 13.5371 17.6367 15.7026C16.9473 17.868 14.8309 18.2553 12.6044 17.759L12 20.0804L10.5971 19.7051L11.2135 17.4197L10.1007 17.1164L9.48436 19.4182L8.09236 19.044L8.70982 16.7531L5.87891 15.9895L6.59236 14.4055C6.59236 14.4055 7.39091 14.6237 7.69309 14.6957C7.99527 14.7677 8.18945 14.4535 8.27454 14.1393C8.35963 13.8251 9.64145 8.61823 9.76254 8.1895C9.88363 7.76078 9.83454 7.42587 9.32618 7.29387C8.81782 7.16187 8.12618 6.95569 8.12618 6.95569L8.52872 5.47969ZM11.3105 12.3753L10.5469 15.4113C10.5469 15.4113 14.3335 16.7782 14.8178 14.855C15.3022 12.9317 11.3105 12.3753 11.3105 12.3753ZM11.6618 10.9353L12.4113 8.1535C12.4113 8.1535 15.6535 8.73387 15.2542 10.2819C14.8549 11.8299 12.9436 11.2364 11.6618 10.9353Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_132_3208">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <p className="ml-[12px] text-white font-inter text-lg">Bitcoin</p>
        </div>
        <div className="flex flex-row items-center mt-[17px]">
          <p className="text-white text-sm font-inter">$ 38,447.54</p>
          <div className="flex flex-row items-center ml-3">
            <p className="text-[#05BC17] text-sm font-inter">+2%</p>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-[4px]"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.4935 5.8025C17.4918 5.7425 17.4743 5.68583 17.4585 5.62833C17.446 5.58 17.4402 5.53083 17.4193 5.48667C17.4002 5.44333 17.3677 5.40833 17.3393 5.36833C17.3043 5.3175 17.2727 5.26667 17.2277 5.225C17.2202 5.2175 17.2168 5.2075 17.2085 5.20083C17.1785 5.175 17.1418 5.16583 17.1093 5.145C17.0593 5.1125 17.0102 5.07917 16.9535 5.0575C16.8977 5.0375 16.8427 5.0325 16.7852 5.02417C16.7452 5.01833 16.7093 5 16.6668 5H12.5002C12.0393 5 11.6668 5.37333 11.6668 5.83333C11.6668 6.29333 12.0393 6.66667 12.5002 6.66667H14.8552L11.4918 10.59L7.9285 8.4525C7.576 8.23917 7.12267 8.3175 6.85933 8.63333L2.69267 13.6333C2.3985 13.9867 2.446 14.5125 2.79933 14.8067C2.956 14.9367 3.14433 15 3.33267 15C3.57183 15 3.8085 14.8983 3.9735 14.7L7.6835 10.2483L11.2377 12.3817C11.5868 12.5908 12.0352 12.5175 12.2993 12.2092L15.8335 8.08583V10C15.8335 10.46 16.206 10.8333 16.6668 10.8333C17.1277 10.8333 17.5002 10.46 17.5002 10V5.83333C17.5002 5.8225 17.4943 5.81333 17.4935 5.8025"
                fill="#05BC17"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-end ml-3">
        <svg
          width="138"
          height="44"
          viewBox="0 0 138 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 43L2.47333 35.7269C4.06 31.7878 7.00667 23.9094 10.0667 23.3467C13.1267 22.784 16.0733 29.5368 19.1333 31.7878C22.1933 34.0387 25.14 31.7878 28.2 32.9132C31.26 34.0387 34.2067 41.8745 37.2667 41.8745C40.3267 41.8745 43.2733 29.0378 46.3333 26.7869C49.3933 24.5359 52.34 24.5359 55.4 25.6614C58.46 26.7869 61.4067 29.0378 64.4667 31.2888C67.5267 33.5397 70.4733 39.1246 73.5333 39.6873C76.5933 40.2501 79.54 16.2155 82.6 12.2763C85.66 8.33714 88.6067 1.5843 91.6667 1.02156C94.7267 0.458827 97.6733 11.0871 100.733 12.2126C103.793 13.338 106.74 9.96161 109.8 9.39887C112.86 8.83613 115.807 11.0871 118.867 15.0262C121.927 18.9654 124.873 27.9267 127.933 26.2385C130.993 24.5503 133.94 12.2126 135.527 7.71066L137 3.20876"
            stroke="#0070E4"
          />
        </svg>
      </div>
    </div>
  );
};

export default MarketCard;
