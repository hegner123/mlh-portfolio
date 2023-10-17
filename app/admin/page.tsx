"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminRedirect() {
  const router = useRouter();
  router.push("/admin/index.html");

  return <div>Admin</div>;
}
