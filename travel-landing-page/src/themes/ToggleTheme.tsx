"use client";

import { useCallback } from "react";
import { useTheme } from "next-themes";

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui";
import MoonIcon from "@/components/Icons/MoonIcon";
import SunIcon from "@/components/Icons/SunIcon";

interface ModeToggleThemeProps {
  onChange?: () => void;
}

const ModeToggleTheme = ({ onChange }: ModeToggleThemeProps) => {
  const { setTheme, theme = "light" } = useTheme();

  const handleChange = useCallback(
    (value: string) => {
      setTheme(value);
      onChange?.();
    },
    [onChange]
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="bg-transparent dark:border-primary">
          {theme === "light" ? <SunIcon /> : <MoonIcon />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleChange("light")}>Light</DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleChange("dark")}>Dark</DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleChange("system")}>System</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ModeToggleTheme;
