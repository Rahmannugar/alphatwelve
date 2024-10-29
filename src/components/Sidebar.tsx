import { useState } from "react";
import { motion } from "framer-motion";

interface Props {
  toggleMode: any;
  mode: any;
}

const Sidebar = ({ toggleMode, mode }: Props) => {
  const [activeItem, setActiveItem] = useState<null | number>(null);
  const [hidden, setHidden] = useState(true);

  const hideSidebar = () => {
    setHidden(!hidden);
  };

  const menuItems = [
    {
      id: 1,
      label: "Home",
      svg: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.62516 16.0419H14.3752C15.2956 16.0419 16.0418 15.2957 16.0418 14.3752V8.12519L10.0002 3.95853L3.9585 8.12519V14.3752C3.9585 15.2957 4.70469 16.0419 5.62516 16.0419Z"
            stroke={`${mode && activeItem == 1 ? "#8576ff" : "#ADA9BB"}`}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.12465 13.1244C8.12465 12.2039 8.87085 11.4577 9.79132 11.4577H10.208C11.1285 11.4577 11.8747 12.2039 11.8747 13.1244V16.0411H8.12465V13.1244Z"
            stroke={`${mode && activeItem == 1 ? "#8576ff" : "#ADA9BB"}`}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 2,
      label: "Events",
      svg: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.66663 10C1.66663 6.85751 1.66663 5.28584 2.64329 4.31001C3.61996 3.33418 5.19079 3.33334 8.33329 3.33334H11.6666C14.8091 3.33334 16.3808 3.33334 17.3566 4.31001C18.3325 5.28668 18.3333 6.85751 18.3333 10V11.6667C18.3333 14.8092 18.3333 16.3808 17.3566 17.3567C16.38 18.3325 14.8091 18.3333 11.6666 18.3333H8.33329C5.19079 18.3333 3.61913 18.3333 2.64329 17.3567C1.66746 16.38 1.66663 14.8092 1.66663 11.6667V10Z"
            stroke={`${mode && activeItem == 2 ? "#8576ff" : "#ADA9BB"}`}
            stroke-width="1.5"
          />
          <path
            d="M5.83325 3.33334V2.08334M14.1666 3.33334V2.08334M2.08325 7.50001H17.9166"
            stroke={`${mode && activeItem == 2 ? "#8576ff" : "#ADA9BB"}`}
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M15 14.1667C15 14.3877 14.9122 14.5996 14.7559 14.7559C14.5996 14.9122 14.3877 15 14.1667 15C13.9457 15 13.7337 14.9122 13.5774 14.7559C13.4211 14.5996 13.3333 14.3877 13.3333 14.1667C13.3333 13.9457 13.4211 13.7337 13.5774 13.5774C13.7337 13.4211 13.9457 13.3333 14.1667 13.3333C14.3877 13.3333 14.5996 13.4211 14.7559 13.5774C14.9122 13.7337 15 13.9457 15 14.1667ZM15 10.8333C15 11.0543 14.9122 11.2663 14.7559 11.4226C14.5996 11.5789 14.3877 11.6667 14.1667 11.6667C13.9457 11.6667 13.7337 11.5789 13.5774 11.4226C13.4211 11.2663 13.3333 11.0543 13.3333 10.8333C13.3333 10.6123 13.4211 10.4004 13.5774 10.2441C13.7337 10.0878 13.9457 10 14.1667 10C14.3877 10 14.5996 10.0878 14.7559 10.2441C14.9122 10.4004 15 10.6123 15 10.8333ZM10.8333 14.1667C10.8333 14.3877 10.7455 14.5996 10.5893 14.7559C10.433 14.9122 10.221 15 10 15C9.77899 15 9.56702 14.9122 9.41074 14.7559C9.25446 14.5996 9.16667 14.3877 9.16667 14.1667C9.16667 13.9457 9.25446 13.7337 9.41074 13.5774C9.56702 13.4211 9.77899 13.3333 10 13.3333C10.221 13.3333 10.433 13.4211 10.5893 13.5774C10.7455 13.7337 10.8333 13.9457 10.8333 14.1667ZM10.8333 10.8333C10.8333 11.0543 10.7455 11.2663 10.5893 11.4226C10.433 11.5789 10.221 11.6667 10 11.6667C9.77899 11.6667 9.56702 11.5789 9.41074 11.4226C9.25446 11.2663 9.16667 11.0543 9.16667 10.8333C9.16667 10.6123 9.25446 10.4004 9.41074 10.2441C9.56702 10.0878 9.77899 10 10 10C10.221 10 10.433 10.0878 10.5893 10.2441C10.7455 10.4004 10.8333 10.6123 10.8333 10.8333ZM6.66667 14.1667C6.66667 14.3877 6.57887 14.5996 6.42259 14.7559C6.26631 14.9122 6.05435 15 5.83333 15C5.61232 15 5.40036 14.9122 5.24408 14.7559C5.0878 14.5996 5 14.3877 5 14.1667C5 13.9457 5.0878 13.7337 5.24408 13.5774C5.40036 13.4211 5.61232 13.3333 5.83333 13.3333C6.05435 13.3333 6.26631 13.4211 6.42259 13.5774C6.57887 13.7337 6.66667 13.9457 6.66667 14.1667ZM6.66667 10.8333C6.66667 11.0543 6.57887 11.2663 6.42259 11.4226C6.26631 11.5789 6.05435 11.6667 5.83333 11.6667C5.61232 11.6667 5.40036 11.5789 5.24408 11.4226C5.0878 11.2663 5 11.0543 5 10.8333C5 10.6123 5.0878 10.4004 5.24408 10.2441C5.40036 10.0878 5.61232 10 5.83333 10C6.05435 10 6.26631 10.0878 6.42259 10.2441C6.57887 10.4004 6.66667 10.6123 6.66667 10.8333Z"
            fill={`${mode && activeItem == 2 ? "#8576ff" : "#ADA9BB"}`}
          />
        </svg>
      ),
    },
    {
      id: 3,
      label: "Speakers",
      svg: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.33333 8.33332C10.1743 8.33332 11.6667 6.84094 11.6667 4.99999C11.6667 3.15904 10.1743 1.66666 8.33333 1.66666C6.49238 1.66666 5 3.15904 5 4.99999C5 6.84094 6.49238 8.33332 8.33333 8.33332Z"
            stroke={`${mode && activeItem == 3 ? "#8576ff" : "#ADA9BB"}`}
            stroke-width="1.5"
          />
          <path
            d="M8.33333 17.5C11.555 17.5 14.1667 16.0076 14.1667 14.1666C14.1667 12.3257 11.555 10.8333 8.33333 10.8333C5.11167 10.8333 2.5 12.3257 2.5 14.1666C2.5 16.0076 5.11167 17.5 8.33333 17.5Z"
            stroke={`${mode && activeItem == 3 ? "#8576ff" : "#ADA9BB"}`}
            stroke-width="1.5"
          />
          <path
            d="M15.8333 1.66666C15.8333 1.66666 17.5 2.66666 17.5 4.99999C17.5 7.33332 15.8333 8.33332 15.8333 8.33332M14.1666 3.33332C14.1666 3.33332 15 3.83332 15 4.99999C15 6.16666 14.1666 6.66666 14.1666 6.66666"
            stroke={`${mode && activeItem == 3 ? "#8576ff" : "#ADA9BB"}`}
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      ),
    },
    {
      id: 4,
      label: "Reports",
      svg: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.5 8.33332C2.5 5.19082 2.5 3.61916 3.47667 2.64332C4.45333 1.66749 6.02417 1.66666 9.16667 1.66666H10.8333C13.9758 1.66666 15.5475 1.66666 16.5233 2.64332C17.4992 3.61999 17.5 5.19082 17.5 8.33332V11.6667C17.5 14.8092 17.5 16.3808 16.5233 17.3567C15.5467 18.3325 13.9758 18.3333 10.8333 18.3333H9.16667C6.02417 18.3333 4.4525 18.3333 3.47667 17.3567C2.50083 16.38 2.5 14.8092 2.5 11.6667V8.33332Z"
            stroke={`${mode && activeItem == 4 ? "#8576ff" : "#ADA9BB"}`}
            stroke-width="1.5"
          />
          <path
            d="M6.66663 8.33331H13.3333M6.66663 11.6666H10.8333"
            stroke={`${mode && activeItem == 4 ? "#8576ff" : "#ADA9BB"}`}
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      ),
    },
    {
      id: 5,
      label: "Notifications",
      svg: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.50004 13.9583C7.50004 13.9583 7.50004 16.0417 10 16.0417C12.5 16.0417 12.5 13.9583 12.5 13.9583M14.375 8.33333V9.99999L16.0417 13.5417H3.95837L5.62504 9.99999V8.33333C5.62504 5.91708 7.5838 3.95833 10 3.95833C12.4163 3.95833 14.375 5.91708 14.375 8.33333Z"
            stroke={`${mode && activeItem == 5 ? "#8576ff" : "#ADA9BB"}`}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 6,
      label: "Messages",
      svg: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.1893 8.74999C15.7127 9.39269 16.0274 10.2565 16.0274 11.3584C16.0274 12.3885 15.7523 13.2105 15.2889 13.8383C15.1207 14.0661 15.1562 14.5969 15.2905 14.8461C15.6121 15.4424 15.0045 16.0958 14.3442 15.9444C13.8499 15.8311 13.3315 15.6778 12.8778 15.4722C12.7117 15.3969 12.5282 15.3665 12.347 15.387C12.1219 15.4125 11.8921 15.425 11.6594 15.425C10.5796 15.425 9.56222 15.1538 8.78145 14.5833M12.6941 8.02502C12.6941 10.8296 10.6553 12.0917 8.32618 12.0917C8.09351 12.0917 7.86373 12.0791 7.63859 12.0536C7.45736 12.0331 7.27395 12.0635 7.10783 12.1388C6.65412 12.3445 6.13567 12.4978 5.6414 12.6111C4.98107 12.7625 4.37356 12.109 4.69509 11.5127C4.82944 11.2636 4.86487 10.7327 4.69675 10.505C4.2333 9.87717 3.95825 9.05515 3.95825 8.02502C3.95825 5.22041 5.99702 3.95833 8.32618 3.95833C10.6553 3.95833 12.6941 5.22041 12.6941 8.02502Z"
            stroke={`${mode && activeItem == 6 ? "#8576ff" : "#ADA9BB"}`}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 7,
      label: "Settings",
      svg: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.68435 12.4689L5.60169 12.6126C6.27886 12.7186 6.76246 13.3388 6.71259 14.0376L6.64501 14.9847C6.62532 15.2606 6.77231 15.5203 7.01575 15.6405L7.69423 15.9748C7.93768 16.0949 8.22836 16.05 8.42718 15.8627L9.10895 15.2183C9.61158 14.7431 10.3872 14.7431 10.8905 15.2183L11.5722 15.8627C11.7711 16.0506 12.0611 16.0949 12.3052 15.9748L12.985 15.6398C13.2278 15.5203 13.3741 15.2613 13.3544 14.986L13.2868 14.0376C13.237 13.3388 13.7206 12.7186 14.3977 12.6126L15.3151 12.4689C15.5821 12.4273 15.7974 12.2226 15.8577 11.9527L16.0251 11.2023C16.0854 10.9325 15.9785 10.6526 15.7554 10.4968L14.9896 9.96051C14.4246 9.56448 14.2521 8.79122 14.5933 8.18375L15.0559 7.36082C15.1904 7.12119 15.1681 6.82115 14.9995 6.60501L14.5303 6.00291C14.3616 5.78677 14.0808 5.6975 13.8223 5.77872L12.9351 6.05661C12.2796 6.26201 11.5808 5.91766 11.3288 5.2659L10.9889 4.38456C10.8892 4.12681 10.6457 3.95766 10.3747 3.95833L9.62274 3.96034C9.35174 3.96102 9.10895 4.13151 9.01053 4.38993L8.67916 5.2612C8.42981 5.91699 7.7277 6.26402 7.07021 6.05728L6.14631 5.76731C5.88712 5.68542 5.60497 5.77536 5.43633 5.99284L4.97044 6.59561C4.80181 6.81376 4.78146 7.11448 4.91861 7.35411L5.39171 8.17905C5.74014 8.78719 5.56953 9.56784 5.00128 9.96588L4.24471 10.4962C4.02161 10.6526 3.91465 10.9325 3.97502 11.2016L4.14235 11.9521C4.20206 12.2226 4.41729 12.4273 4.68435 12.4689Z"
            stroke={`${mode && activeItem == 7 ? "#8576ff" : "#ADA9BB"}`}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.3259 8.6741C12.0581 9.40625 12.0581 10.5937 11.3259 11.3259C10.5938 12.058 9.4063 12.058 8.67415 11.3259C7.942 10.5937 7.942 9.40625 8.67415 8.6741C9.4063 7.94196 10.5938 7.94196 11.3259 8.6741Z"
            stroke={`${mode && activeItem == 7 ? "#8576ff" : "#ADA9BB"}`}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
  ];
  return (
    <motion.div
      className={`${
        mode ? "bg-white border border-[#e6e6ed]" : "bg-[rgba(72,69,84,1)]"
      }`}
      initial={{ width: 70 }}
      animate={{ width: hidden ? 70 : 250 }}
      transition={{ duration: 0.6 }}
    >
      {hidden ? (
        <motion.div
          className={`scrollbar hidden h-screen overflow-y-auto w-[70px] md:flex md:flex-col justify-center items-center py-16 space-y-4`}
        >
          {menuItems.map((item) => (
            <div
              key={item.id}
              className={`py-3 px-3 cursor-pointer w-fit ${
                mode ? "hover:bg-[#f1f1f3]" : "hover:bg-white"
              } rounded-full`}
            >
              {item.svg}
            </div>
          ))}

          {/* Expand */}
          <div
            onClick={hideSidebar}
            className={`py-3 px-3 cursor-pointer ${
              mode ? "hover:bg-[#f1f1f3]" : "hover:bg-white"
            } w-fit hover:text-black rounded-full`}
          >
            {mode ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.37498 7.29166L6.45831 10L9.37498 12.7083M13.5416 7.29166L10.625 10L13.5416 12.7083"
                  stroke="#ADA9BB"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.37492 7.29166L6.45825 10L9.37492 12.7083M13.5416 7.29166L10.6249 10L13.5416 12.7083"
                  stroke="#ADA9BB"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            )}
          </div>

          {/* Profile */}
          <div className="px-3 text-sm cursor-pointer">
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_9606_357)">
                <rect
                  x="1"
                  y="1"
                  width="32"
                  height="32"
                  rx="16"
                  fill="#F3F4F6"
                />
                <mask
                  id="mask0_9606_357"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="1"
                  y="1"
                  width="32"
                  height="32"
                >
                  <circle cx="17" cy="17" r="16" fill="#F1F5F9" />
                </mask>
                <g mask="url(#mask0_9606_357)">
                  <path
                    d="M33 28.992V33.0013H1V29.0066C2.86127 26.5192 5.27721 24.5004 8.05572 23.1107C10.8342 21.721 13.8987 20.9987 17.0053 21.0013C23.544 21.0013 29.352 24.14 33 28.992ZM22.336 13C22.336 14.4144 21.7741 15.771 20.7739 16.7712C19.7737 17.7714 18.4172 18.3333 17.0027 18.3333C15.5882 18.3333 14.2316 17.7714 13.2314 16.7712C12.2312 15.771 11.6693 14.4144 11.6693 13C11.6693 11.5855 12.2312 10.2289 13.2314 9.22872C14.2316 8.22853 15.5882 7.66663 17.0027 7.66663C18.4172 7.66663 19.7737 8.22853 20.7739 9.22872C21.7741 10.2289 22.336 11.5855 22.336 13Z"
                    fill="#CBD5E1"
                  />
                </g>
              </g>
              <rect
                x="0.5"
                y="0.5"
                width="33"
                height="33"
                rx="16.5"
                stroke="#E2E8F0"
              />
              <defs>
                <clipPath id="clip0_9606_357">
                  <rect
                    x="1"
                    y="1"
                    width="32"
                    height="32"
                    rx="16"
                    fill="white"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </motion.div>
      ) : (
        <motion.div
          className={`scrollbar hidden h-screen overflow-y-auto md:flex md:flex-col px-2 py-16 space-y-4`}
        >
          {menuItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item.id)}
              className={`flex items-center space-x-3 py-3 px-3 text-sm cursor-pointer transition-all
                  ${
                    activeItem === item.id && !mode
                      ? "bg-[#8576ff]"
                      : " hover:bg-white hover:text-black"
                  }
            ${
              activeItem === item.id && mode
                ? "text-[#8576ff] bg-[rgba(252,247,255,1)]"
                : "hover:bg-gray-300"
            }`}
            >
              {item.svg}
              <h1>{item.label}</h1>
            </div>
          ))}
          {/* Collapse */}
          <div
            onClick={hideSidebar}
            className={`flex items-center space-x-3 py-3 px-3 text-sm cursor-pointer ${
              mode
                ? "hover:bg-gray-300 text-[rgba(51,65,85,1)]"
                : "hover:bg-gray-300 hover:text-black text-white"
            }`}
          >
            {mode ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.37498 7.29166L6.45831 10L9.37498 12.7083M13.5416 7.29166L10.625 10L13.5416 12.7083"
                  stroke="#ADA9BB"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.37492 7.29166L6.45825 10L9.37492 12.7083M13.5416 7.29166L10.6249 10L13.5416 12.7083"
                  stroke="#ADA9BB"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            )}

            <h1>Collapse</h1>
          </div>

          {/* Switch */}
          <div
            onClick={toggleMode}
            className={`flex items-center space-x-3 py-3 px-3 text-xs cursor-pointer ${
              mode
                ? "hover:bg-gray-300 text-[rgba(51,65,85,1)]"
                : "hover:bg-gray-300 hover:text-black text-white"
            }`}
          >
            {mode ? (
              <svg
                width="24"
                height="16"
                viewBox="0 0 24 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="24" height="16" rx="8" fill="#E2E8F0" />
                <rect x="2" y="2" width="12" height="12" rx="6" fill="white" />
              </svg>
            ) : (
              <svg
                width="24"
                height="16"
                viewBox="0 0 24 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="24" height="16" rx="8" fill="#8576FF" />
                <rect x="10" y="2" width="12" height="12" rx="6" fill="white" />
              </svg>
            )}

            <h1>Dark mode</h1>
          </div>

          {/* Profile */}
          <div
            className={`flex items-center space-x-3 py-3 px-3 text-sm cursor-pointer ${
              mode
                ? "hover:bg-gray-300 text-[rgba(51,65,85,1)]"
                : "hover:bg-gray-300 hover:text-black text-white"
            }`}
          >
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_9606_357)">
                <rect
                  x="1"
                  y="1"
                  width="32"
                  height="32"
                  rx="16"
                  fill="#F3F4F6"
                />
                <mask
                  id="mask0_9606_357"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="1"
                  y="1"
                  width="32"
                  height="32"
                >
                  <circle cx="17" cy="17" r="16" fill="#F1F5F9" />
                </mask>
                <g mask="url(#mask0_9606_357)">
                  <path
                    d="M33 28.992V33.0013H1V29.0066C2.86127 26.5192 5.27721 24.5004 8.05572 23.1107C10.8342 21.721 13.8987 20.9987 17.0053 21.0013C23.544 21.0013 29.352 24.14 33 28.992ZM22.336 13C22.336 14.4144 21.7741 15.771 20.7739 16.7712C19.7737 17.7714 18.4172 18.3333 17.0027 18.3333C15.5882 18.3333 14.2316 17.7714 13.2314 16.7712C12.2312 15.771 11.6693 14.4144 11.6693 13C11.6693 11.5855 12.2312 10.2289 13.2314 9.22872C14.2316 8.22853 15.5882 7.66663 17.0027 7.66663C18.4172 7.66663 19.7737 8.22853 20.7739 9.22872C21.7741 10.2289 22.336 11.5855 22.336 13Z"
                    fill="#CBD5E1"
                  />
                </g>
              </g>
              <rect
                x="0.5"
                y="0.5"
                width="33"
                height="33"
                rx="16.5"
                stroke="#E2E8F0"
              />
              <defs>
                <clipPath id="clip0_9606_357">
                  <rect
                    x="1"
                    y="1"
                    width="32"
                    height="32"
                    rx="16"
                    fill="white"
                  />
                </clipPath>
              </defs>
            </svg>
            <div className={`text-xs`}>
              <h1>Rudra Devi</h1>
              <h2>rudra.devi@gmail.com</h2>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};
export default Sidebar;
