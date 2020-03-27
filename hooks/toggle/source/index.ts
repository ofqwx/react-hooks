import { useState } from "react";

type TToggle = [boolean, () => void];

export default function useToggle(): TToggle {
  const [toggled, setToggled] = useState<boolean>(false);

  function toggle() {
    setToggled(prevState => !prevState);
  }

  return [toggled, toggle];
}
