"use client";

import { useEffect } from "react";

export default function LoginForm() {
  useEffect(() => {
    window.location.href = "https://trade.trademetrix.tech/user";
  }, []);

  return null;
}

