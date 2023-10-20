import { object } from "prop-types"
import { ListGroup } from "flowbite-react"
import { AiOutlineLoading } from "react-icons/ai"
import { HiTrash } from "react-icons/hi"
import { deleteSample } from "../../services/sampleService"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "react-toastify"
import { useParams } from "react-router-dom"


export const ItemDeleteSample = ({ data }) => {
    const client = useQueryClient();
    const { id } = useParams();

    const {
        mutate,
        isLoading
    } = useMutation({
        mutationFn: (id) => deleteSample(id),
        onSuccess: async (data) => {
            if (data.successful) {
                toast.success(data.message);
                await client.invalidateQueries(["request", id]);
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

ItemDeleteSample.propTypes = {
    data: object.isRequired,
}


