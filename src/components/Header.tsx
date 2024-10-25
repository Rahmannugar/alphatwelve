const Header = () => {
  const layers = [
    {
      title: "Total Events",
      value: "100,000",
      ratingSvg: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.5 10.1667V4.5H5.83333M11.3333 4.66667L4.5 11.5"
            stroke="#10B981"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      ratingPercent: "+5.0%",
    },
    {
      title: "Active Speakers",
      value: "25",
      ratingSvg: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.5 5.83333V11.5H5.83333M11.3333 11.3333L4.5 4.5"
            stroke="#F43F5E"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      ratingPercent: "-5.0%",
    },
    {
      title: "Total Registrations",
      value: "300",
      ratingSvg: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.5 10.1667V4.5H5.83333M11.3333 4.66667L4.5 11.5"
            stroke="#10B981"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      ratingPercent: "+5.0%",
    },
    {
      title: "Total Revenue",
      value: "$500,000",
      ratingSvg: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.5 10.1667V4.5H5.83333M11.3333 4.66667L4.5 11.5"
            stroke="#10B981"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      ratingPercent: "+5.0%",
    },
  ];
  return (
    <div className="px-5 lg:py-9 lg:px-7">
      <h1 className="text-[17px] lg:text-[22px]">
        Welcome! here’s your summary
      </h1>
      <div className="md:flex flex-wrap space-x-5 mt-10 items-center">
        {layers.map((layer) => (
          <div
            className="w-[260px] h-[88px] p-4 cursor-pointer space-y-1"
            style={{
              border: "1px solid rgba(72, 69, 84, 1)",
              backgroundColor: "rgba(72, 69, 84, 1)",
            }}
          >
            {/* top */}
            <div className="font-semibold flex items-center space-x-1">
              <h1> {layer.title}</h1>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 8.66666V9.99999"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.33329 5.99999C8.33329 6.18409 8.18405 6.33332 7.99996 6.33332C7.81586 6.33332 7.66663 6.18409 7.66663 5.99999C7.66663 5.81589 7.81586 5.66666 7.99996 5.66666C8.18405 5.66666 8.33329 5.81589 8.33329 5.99999Z"
                  stroke="white"
                />
                <path
                  d="M12.8333 7.99999C12.8333 10.6694 10.6693 12.8333 7.99996 12.8333C5.33058 12.8333 3.16663 10.6694 3.16663 7.99999C3.16663 5.33061 5.33058 3.16666 7.99996 3.16666C10.6693 3.16666 12.8333 5.33061 12.8333 7.99999Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            {/* bottom */}
            <div className="flex items-center font-semibold space-x-2">
              <h1 className="text-[20px]">{layer.value}</h1>
              {layer.ratingSvg}
              <h1
                className={`text-[10px] ${
                  layer.ratingPercent.includes("-")
                    ? "text-red-500"
                    : "text-green-500"
                }`}
              >
                {layer.ratingPercent}
              </h1>
            </div>
          </div>
        ))}
      </div>


      
    </div>
  );
};
export default Header;
