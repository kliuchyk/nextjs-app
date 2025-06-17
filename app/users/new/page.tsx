"use client";

import { useRouter } from "next/navigation";

export default function NewUserPage() {
  const router = useRouter();

  const handleCreate = async () => {
    router.push("/users");
  };

  return (
    <div>
      <button onClick={handleCreate} className="btn btn-primary">
        Create
      </button>
    </div>
  );
}
