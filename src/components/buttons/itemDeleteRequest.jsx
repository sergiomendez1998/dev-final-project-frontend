import { object } from "prop-types"
import { ListGroup } from "flowbite-react"
import { AiOutlineLoading } from "react-icons/ai"
import { HiTrash } from "react-icons/hi"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "react-toastify"
import { deleteRequest } from "../../services/requestService"
import { useNavigate } from "react-router-dom"


export const ItemDeleteRequest = ({ data }) => {
    const client = useQueryClient();
    const navigate = useNavigate();

    const {
        mutate,
        isLoading,
        error,
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

    if (error) {
        navigate('/Error', {
            state: {
                statusCode: error?.statusCode ?? "500",
                message: error.message,
                name: error.name,
            },
        })
    }

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


