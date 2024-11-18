import { useRef } from "react";

const useNavBar = () => {
  const menuRef = useRef<HTMLButtonElement>(null);

  function toggleMenu() {
    if (menuRef.current) {
      menuRef?.current?.classList?.toggle("group-open");
    }
  }
  return {
    toggleMenu,
    menuRef,
  };
};

export default useNavBar;
