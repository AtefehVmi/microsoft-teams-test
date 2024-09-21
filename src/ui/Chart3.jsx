function Chart3() {
  return (
    <div className="h-screen flex items-center justify-center relative">
      <div className="flex flex-col items-center justify-end z-10 ">
        <div className="w-[300px] h-[146px] relative mt-[-47.7px] ml-[40px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="382"
            height="127"
            viewBox="0 0 382 127"
            fill="none"
            className="absolute top-2"
          >
            <path
              d="M1.82849 41.07L80.6849 1.43872L154.022 11.3265L227.36 107.341L300.698 19.3902L380.167 125.752"
              stroke="#B146C2"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="382"
            height="138"
            viewBox="0 0 382 138"
            fill="none"
            className="absolute bottom-0"
          >
            <path
              d="M80.6468 0.438721L0.534912 40.9238V137.146H381.465V126.047L300.74 18.3902L227.375 106.341L154.011 10.3265L80.6468 0.438721Z"
              fill="#CF87DA"
              fillOpacity="0.5"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="382"
            height="41"
            viewBox="0 0 382 41"
            fill="none"
            className="absolute top-[47.7px]"
          >
            <path
              d="M1.81177 24.6988L80.6693 16.5603L154.006 39.5631L227.343 26.2457L300.68 22.0084L380.151 1.52783"
              stroke="#00B7C3"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="382"
            height="99"
            viewBox="0 0 382 99"
            fill="none"
            className="absolute bottom-0"
          >
            <path
              d="M80.6468 16.5604L0.534912 25.5526V98.5732H381.465V0.674072L300.74 22.0084L227.375 26.2458L154.011 39.5632L80.6468 16.5604Z"
              fill="#00B7C3"
              fillOpacity="0.3"
            />
          </svg>
        </div>

        <div className="flex gap-[16px] items-start justify-start w-[306px] mb-[-50px] mt-[39px]">
          <div className="w-[52px] h-[16px] gap-[4px] flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
            >
              <path
                d="M-0.000793457 0.623392C-0.000793457 0.278158 0.279074 -0.00170898 0.624309 -0.00170898H9.37574C9.72097 -0.00170898 10.0008 0.278159 10.0008 0.623393V9.37482C10.0008 9.72006 9.72097 9.99992 9.37574 9.99992H0.624307C0.279073 9.99992 -0.000793457 9.72006 -0.000793457 9.37482V0.623392Z"
                fill="#00B7C3"
              />
            </svg>
            <span className="w-[38px] font-normal not-italic font-segoe leading-small text-tinyx2 text-NeutralForeground2Rest">
              Line 1
            </span>
          </div>
          <div className="w-[52px] h-[16px] gap-[4px] flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="10"
              viewBox="0 0 11 10"
              fill="none"
            >
              <path
                d="M0.500366 0.623148C0.500366 0.277913 0.780234 -0.00195312 1.12547 -0.00195312H9.8769C10.2221 -0.00195312 10.502 0.277915 10.502 0.623149V9.37458C10.502 9.71981 10.2221 9.99968 9.8769 9.99968H1.12547C0.780233 9.99968 0.500366 9.71981 0.500366 9.37458V0.623148Z"
                fill="#B146C2"
              />
            </svg>
            <span className="w-[38px] font-normal not-italic font-segoe leading-small text-tinyx2 text-NeutralForeground2Rest">
              Line 2
            </span>
          </div>
        </div>
      </div>

      <div className="flex h-[144px] flex-col items-center justify-between self-stretch absolute z-0 mt-[25px]">
        <div className="flex items-center justify-center">
          <span className="w-[24px] font-segoe font-normal text-[12px] leading-[16px] not-italic text-center text-Neutral">
            100K
          </span>
          <div className="h-[1px] w-[306px] bg-frameLine"></div>
        </div>

        <div className="flex items-center justify-center">
          <span className="w-[24px] font-segoe font-normal text-[12px] leading-[16px] not-italic text-center text-Neutral">
            80K
          </span>
          <div className="h-[1px] w-[306px] bg-frameLine"></div>
        </div>

        <div className="flex items-center justify-center">
          <span className="w-[24px] font-segoe font-normal text-[12px] leading-[16px] not-italic text-center text-Neutral">
            60K
          </span>
          <div className="h-[1px] w-[306px] bg-frameLine"></div>
        </div>

        <div className="flex items-center justify-center">
          <span className="w-[24px] font-segoe font-normal text-[12px] leading-[16px] not-italic text-center  text-Neutral">
            40K
          </span>
          <div className="h-[1px] w-[306px] bg-frameLine"></div>
        </div>

        <div className="flex items-center justify-center">
          <span className="w-[24px] font-segoe font-normal text-[12px] leading-[16px] not-italic text-center  text-Neutral">
            20K
          </span>
          <div className="h-[1px] w-[306px] bg-frameLine"></div>
        </div>

        <div className="flex items-center justify-center">
          <span className="w-[24px] font-segoe font-normal text-[12px] leading-[16px] not-italic text-center text-Neutral">
            0
          </span>
          <div className="h-[1px] w-[306px] bg-frameLine"></div>
        </div>
      </div>
    </div>
  );
}

export default Chart3;
