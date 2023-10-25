import { func, string } from "prop-types";
import { Button } from "flowbite-react";
import { FaTrash } from "react-icons/fa";
import { useQueryClient } from "@tanstack/react-query";

export const ButtonDelete = ({ action, queryKey }) => {
  const client = useQueryClient();

  return (
    <Button
      color="failure"
      className="rounded-s-none font-bold"
      onClick={async () => {
        await action();
        await client.refetchQueries([queryKey]);
      }}
    >
      <FaTrash className="me-2" />
    </Button>
  );
};

ButtonDelete.propTypes = {
  action: func.isRequired,
  queryKey: string.isRequired,
};
