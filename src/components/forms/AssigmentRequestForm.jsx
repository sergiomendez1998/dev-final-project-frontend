import Select from "react-select";
import { object } from "prop-types";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllCatalogs } from "../../services/catalogService";
import { CATALOGS } from "../../config/constants";
import { Col } from "../grid/Col";
import { Button } from "flowbite-react";
import { AiOutlineLoading } from "react-icons/ai";
import { useForm } from "../../hooks/useForm";
import { Response } from "../messages/Response";
import { assigmentAndTranslateForRole } from "../../services/requestService";
import { toast } from "react-toastify";

const initialForm = {
    typeRoleToAssign: "",
    statusId: "",
    requestId: "",
};

const validateForm = (form) => {
    let errors = {};

    if (!form.typeRoleToAssign) {
        errors.typeRoleToAssign = "El rol es requerido";
    }

    if (!form.statusId) {
        errors.statusId = "El estado es requerido";
    }

    return errors;
};

export const AssigmentRequestForm = ({ data }) => {
    const client = useQueryClient();
    const {
        data: rols,
        isLoading,
        isFetching,
    } = useQuery({
        queryKey: ["catalog", CATALOGS.role],
        queryFn: () => getAllCatalogs(CATALOGS.role),
        select: (rols) => {
            return rols
                .filter((r) => r.id != 1 && r.id != 6 && r.id != 3)
                .map((rols) => ({
                    value: rols.name,
                    label: rols.name,
                }));
        },
    });

    const {
        data: statusRequest,
        isLoading: loadingStatus,
        isFetching: fetchingStatus,
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

        const result = await assigmentAndTranslateForRole(form);
        if (result.successful) {
            toast.success(result.message);
            await client.invalidateQueries(["requests"]);
        } else {
            toast.error(result.message)
        }
        return result;
    };

    const { form, errors, handleChange, handleSubmit, loading, response } =
        useForm(initialForm, validateForm, sendForms);

    return (
        <section className="mx-4 flex flex-wrap justify-center gap-4">
            {response && (
                <Response message={response.message} type={response.successful} />
            )}
            <form
                onSubmit={handleSubmit}
                className="flex h-[30vh] flex-wrap justify-center"
            >
                <Col sm={12} md={6}>
                    <Select
                        name="typeRoleToAssign"
                        options={rols ?? []}
                        isLoading={isLoading || isFetching}
                        noOptionsMessage={() => "No hay roles disponibles para seleccionar"}
                        placeholder="-- Selecciona un rol --"
                        value={rols?.find((r) => r.value == form.typeRoleToAssign)}
                        onChange={(val) =>
                            handleChange({ target: { name: "typeRoleToAssign", value: val.value } })
                        }
                    />
                    <p className="font-bold text-red-600">{errors?.typeRoleToAssign}</p>
                </Col>
                <Col sm={12} md={6}>
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
                <Col sm={12} md={6} className={"mt-12 flex items-center"}>
                    <Button
                        isProcessing={loading}
                        processingSpinner={
                            <AiOutlineLoading className="h-6 w-6 animate-spin" />
                        }
                        color="primary"
                        type="submit"
                        fullSized
                    >
                        Asignar y trasladar solicitud
                    </Button>
                </Col>
            </form>
        </section>
    );
};

AssigmentRequestForm.propTypes = {
    data: object.isRequired,
};
