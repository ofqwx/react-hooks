import { useState } from "react";

type TToggle = [boolean, () => void];

export default function useToggle(initialValue = false): TToggle {
  const [toggled, setToggled] = useState<boolean>(initialValue);

  function toggle() {
    setToggled(prevState => !prevState);
  }

  return [toggled, toggle];
}
