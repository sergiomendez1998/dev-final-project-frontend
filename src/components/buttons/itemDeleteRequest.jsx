import { object } from "prop-types"
import { ListGroup } from "flowbite-react"
import { AiOutlineLoading } from "react-icons/ai"
import { HiTrash } from "react-icons/hi"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "react-toastify"
import { deleteRequest } from "../../services/requestService"


export const ItemDeleteRequest = ({ data }) => {
    const client = useQueryClient();

    const {
        mutate,
        isLoading
    } = useMutation({
        mutationFn: (id) => deleteRequest(id),
        onSuccess: async (data) => {
            if (data.successful) {
                toast.success(data.message);
                await client.invalidateQueries(["requests"]);
            } else {
                toast.error(data.message)
            }
        },
    });

    return (
        <ListGroup.Item
            className="text-red-700"
            icon={HiTrash}
            onClick={() => mutate(data.id)}
        >
            <span>Eliminar</span>
            {isLoading && <AiOutlineLoading className="animate-spin" />}
        </ListGroup.Item>
    )
}

ItemDeleteRequest.propTypes = {
    data: object.isRequired,
}


