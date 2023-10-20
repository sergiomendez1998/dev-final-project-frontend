import Select from "react-select";
import PropTypes from "prop-types";
import { Response } from "../../components/messages/Response";
import { Col } from "../../components/grid/Col";
import { Button, Card } from "flowbite-react";
import { AiOutlineLoading } from "react-icons/ai";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { convertToItemsSelect } from "../../util/utilConvert";
import { getItemsRequest } from "../../services/requestService";
import {
    assigmentItems,
    disAssigmentItems,
} from "../../services/sampleService";
import { FaTrash } from "react-icons/fa";
import { useContext } from "react";
import { SampleContext } from "../../context/SampleContext";

export const ItemsAssigment = ({
    selectedItems,
    setSelectedItems,
    selectedSample,
    requestId,
    refetchRequest,
}) => {
    const client = useQueryClient();
    const { setSelectedSample } = useContext(SampleContext);

    const {
        data: items,
        isLoading: isLoadingItems,
        isFetching: isFetchingItems,
        refetch: refetchItems,
    } = useQuery({
        queryKey: ["items", requestId],
        queryFn: () => getItemsRequest(requestId),
        select: (data) => {
            return convertToItemsSelect(data);
        },
    });

    const {
        data: response,
        mutate,
        isLoading: loading,
        reset: resetAssigment,
    } = useMutation({
        mutationFn: (data) => assigmentItems(data),
        onSuccess: async (data) => {
            if (data.successful) {
                refetchItems();
                setSelectedItems([]);
                await refetchRequest();
                const newData = client.getQueryData(["request", requestId]);
                setSelectedSample(
                    newData.sampleWrapper.find((s) => s.id === selectedSample.id),
                );
            }
        },
    });

    const {
        data: itemDisasociate,
        mutate: mutateItems,
        isLoading: isLoadingDisasociate,
        reset: resetDisasociate,
    } = useMutation({
        mutationFn: (data) => disAssigmentItems(data),
        onSuccess: async (data) => {
            if (data.successful) {
                refetchItems();
                setSelectedItems([]);
                await refetchRequest();
                const newData = client.getQueryData(["request", requestId]);
                setSelectedSample(
                    newData.sampleWrapper.find((s) => s.id === selectedSample.id),
                );
            }
        },
    });

    return (
        <article className="flex h-[70vh] flex-col flex-wrap gap-2 p-4">
            {response && (
                <Response message={response.message} type={response.successful} />
            )}
            {itemDisasociate && (
                <Response
                    message={itemDisasociate.message}
                    type={itemDisasociate.successful}
                />
            )}
            <h2 className="text-2xl font-bold">items</h2>

            <div className="flex h-[35vh] flex-wrap  gap-4 overflow-y-auto rounded-xl border-2 border-gray-400 p-4">
                {selectedSample.items.map((item, idx) => (
                    <Card key={idx} className="relative max-h-24 w-full">
                        <span className="flex justify-between">
                            <span className="font-bold">{item.name}</span>
                            <Button
                                isProcessing={isLoadingDisasociate}
                                processingSpinner={
                                    <AiOutlineLoading className="h-6 w-6 animate-spin" />
                                }
                                color="failure"
                                onClick={() => {
                                    resetAssigment();
                                    mutateItems({ itemId: item.id, sampleId: selectedSample.id });
                                }}
                            >
                                <FaTrash size={25} />
                            </Button>
                        </span>
                    </Card>
                ))}
            </div>
            <Col md={12}>
                <Select
                    value={selectedItems}
                    options={items ?? []}
                    isMulti
                    isLoading={isLoadingItems || isFetchingItems}
                    onChange={(value) => setSelectedItems(value)}
                    noOptionsMessage={() => "No hay items disponibles para asociar"}
                />
            </Col>
            <div className="flex justify-center">
                <Col xs={12} md={6}>
                    <Button
                        isProcessing={loading}
                        processingSpinner={
                            <AiOutlineLoading className="h-6 w-6 animate-spin" />
                        }
                        color="primary"
                        type="submit"
                        fullSized
                        onClick={() => {
                            resetDisasociate();
                            mutate({
                                data: selectedItems,
                                sampleId: selectedSample.id,
                            });
                        }}
                    >
                        {"Asignar Items"}
                    </Button>
                </Col>
            </div>
        </article>
    );
};

ItemsAssigment.propTypes = {
    selectedItems: PropTypes.array,
    setSelectedItems: PropTypes.func,
    selectedSample: PropTypes.object,
    requestId: PropTypes.string,
    refetchRequest: PropTypes.func,
};
