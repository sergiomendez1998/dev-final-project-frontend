import Select from "react-select";
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { object } from 'prop-types';
import { getAllCatalogs } from '../../services/catalogService';
import { CATALOGS } from '../../config/constants';
import { useForm } from '../../hooks/useForm';
import { Response } from '../messages/Response';
import { Col } from '../grid/Col';
import { Button } from 'flowbite-react';
import { AiOutlineLoading } from 'react-icons/ai';
import { changeStatusRequest } from "../../services/requestService";
import { toast } from "react-toastify";
import NotFound from "../../pages/error/NotFound";

const initialForm = {
    statusId: "",
    requestId: "",
};

const validateForm = (form) => {
    let errors = {};

    if (!form.statusId) {
        errors.statusId = "El estado es requerido";
    }

    return errors;
};

export const ChangeStateForm = ({ data }) => {
    const client = useQueryClient();
    const {
        data: statusRequest,
        isLoading: loadingStatus,
        isFetching: fetchingStatus,
        error,
    } = useQuery({
        queryKey: ["catalog", CATALOGS.statusRequest],
        queryFn: () => getAllCatalogs(CATALOGS.statusRequest),
        select: (status) => {
            return status
                .filter((s) => s.id != 1)
                .map((rols) => ({
                    value: rols.id,
                    label: rols.name,
                }));
        },
    });

    const sendForms = async (form) => {
        form.requestId = data.id;
        const result = await changeStatusRequest(form);
        if (result.successful) {
            toast.success(result.message);
            await client.invalidateQueries(["requests"]);
        } else {
            toast.error(result.message)
        }
        return result;
    }


    const { form, errors, handleChange, handleSubmit, loading, response } =
        useForm(initialForm, validateForm, sendForms);

    if (error) {
        return <NotFound Message={error.message} Number={error.statusCode} />;
    }

    return (
        <article className="mx-4">
            {response && (
                <Response message={response.message} type={response.successful} />
            )}
            <form onSubmit={handleSubmit} className="flex flex-wrap justify-center">
                <Col sm={12} md={12}>
                    <Select
                        name="statusId"
                        options={statusRequest ?? []}
                        isLoading={loadingStatus || fetchingStatus}
                        noOptionsMessage={() =>
                            "No hay estados disponibles para seleccionar"
                        }
                        placeholder="-- Selecciona un estado --"
                        value={statusRequest?.find((r) => r.value == form.statusId)}
                        onChange={(val) =>
                            handleChange({ target: { name: "statusId", value: val.value } })
                        }
                    />
                    <p className="font-bold text-red-600">{errors?.statusId}</p>
                </Col>
                <Col sm={12} md={12} className={"mt-6 flex items-center"}>
                    <Button
                        isProcessing={loading}
                        processingSpinner={
                            <AiOutlineLoading className="h-6 w-6 animate-spin" />
                        }
                        color="primary"
                        type="submit"
                        fullSized
                    >
                        Cambiar de estado
                    </Button>
                </Col>
            </form>
        </article>
    )
}

ChangeStateForm.propTypes = {
    data: object.isRequired,
}


