import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const DropdownUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef<any>(null);
  const dropdown = useRef<any>(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <div className="relative">
      <Link
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        to="#"
      >
        <div className="h-9 w-9 rounded-[50%] overflow-hidden shadow border-white border-1">
          <img
            src="https://ems.aztu.edu.az/assets/dist/img/profile.png"
            alt="User"
          />
        </div>
      </Link>

      {/* <!-- Dropdown Start --> */}
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`overflow-hidden absolute right-0 mt-4 flex w-[280px] flex-col rounded-[15px] border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark ${
          dropdownOpen === true ? 'block' : 'hidden'
        }`}
      >
        <div className="p-[10px] text-center h-[175px]">
          <div className="h-[90px] w-[90px] rounded-full overflow-hidden shadow border-white border-3 inline-block">
            <img
              className="size-full"
              src="https://ems.aztu.edu.az/assets/dist/img/profile.png"
              alt=""
            />
          </div>
          <p className="text-[17px] mt-1 text-[#212529]">Name Surname</p>
        </div>
        <div className="bg-[#f8f9fa] p-[10px]">
          <Link to="../auth/signup">
            <button className="btn btn-danger">
              <i className="fas fa-right-from-bracket"></i> Çıxış
            </button>
          </Link>
        </div>
      </div>
      {/* <!-- Dropdown End --> */}
    </div>
  );
};

export default DropdownUser;
